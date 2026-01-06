#!/usr/bin/env node

/**
 * Import data from barkbone_products_2025-12-19.json into Airtable
 */

const fs = require('fs');
const path = require('path');

// Load products from JSON file
const productsFile = path.join(__dirname, 'barkbone_products_2025-12-19.json');
const products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

console.log(`📦 Found ${products.length} products to import`);

// Load Airtable config
const configFile = path.join(__dirname, 'config.js');
const configContent = fs.readFileSync(configFile, 'utf8');

const baseIdMatch = configContent.match(/baseId:\s*['"]([^'"]+)['"]/);
const apiKeyMatch = configContent.match(/apiKey:\s*['"]([^'"]+)['"]/);
const tableIdMatch = configContent.match(/tableId:\s*['"]([^'"]+)['"]/);

const AIRTABLE_CONFIG = {
    baseId: baseIdMatch[1],
    apiKey: apiKeyMatch[1],
    tableId: tableIdMatch[1]
};

const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${AIRTABLE_CONFIG.tableId}`;

console.log(`🔗 Connecting to Airtable base: ${AIRTABLE_CONFIG.baseId}`);
console.log(`📊 Table: ${AIRTABLE_CONFIG.tableId}`);
console.log('');

async function importProducts() {
    let successCount = 0;
    let errorCount = 0;

    // Airtable allows max 10 records per batch
    const batchSize = 10;

    for (let i = 0; i < products.length; i += batchSize) {
        const batch = products.slice(i, i + batchSize);

        console.log(`📤 Importing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(products.length/batchSize)} (${batch.length} products)...`);

        const records = batch.map((product, index) => ({
            fields: {
                PartNumber: product.partNumber,
                Description: product.description,
                OpenPO: product.openPO || '',
                BoxSize: product.boxSize || '',
                CasePack: product.casePack ? parseInt(product.casePack) : 0,
                BackerStock: product.backerStock || '',
                AmountNeeded: product.amountNeeded || '',
                Priority: product.priority || 'none',
                SortOrder: i + index
            }
        }));

        try {
            const response = await fetch(AIRTABLE_URL, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${AIRTABLE_CONFIG.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ records })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`   ❌ Error: ${response.status} - ${errorText.substring(0, 200)}`);
                errorCount += batch.length;
            } else {
                const result = await response.json();
                successCount += result.records.length;
                console.log(`   ✅ Successfully imported ${result.records.length} products`);
            }
        } catch (error) {
            console.error(`   ❌ Error: ${error.message}`);
            errorCount += batch.length;
        }

        // Wait a bit between batches to avoid rate limiting
        if (i + batchSize < products.length) {
            await new Promise(resolve => setTimeout(resolve, 200));
        }
    }

    console.log('');
    console.log('═══════════════════════════════════════');
    console.log('📊 Import Summary:');
    console.log(`   ✅ Success: ${successCount} products`);
    console.log(`   ❌ Errors: ${errorCount} products`);
    console.log('═══════════════════════════════════════');

    if (successCount > 0) {
        console.log('');
        console.log('🎉 Data successfully imported to Airtable!');
        console.log('🌐 Refresh your Heroku app to see the data:');
        console.log('   https://inventory-tracker-app-6897518bdc21.herokuapp.com');
    }
}

// Run the import
importProducts().catch(err => {
    console.error('❌ Fatal error:', err);
    process.exit(1);
});
