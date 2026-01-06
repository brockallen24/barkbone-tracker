#!/usr/bin/env node

/**
 * API Connection Test Script
 * This script tests the Airtable API connection to diagnose spinner issues
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function separator() {
    log('═'.repeat(70), 'cyan');
}

async function testAirtableConnection() {
    log('\n🔍 AIRTABLE API CONNECTION TEST', 'cyan');
    separator();

    // Step 1: Load config
    log('\n📋 Step 1: Loading configuration from config.js...', 'blue');

    try {
        const configContent = fs.readFileSync(path.join(__dirname, 'config.js'), 'utf8');

        // Extract config values using regex (simple parsing)
        const baseIdMatch = configContent.match(/baseId:\s*['"]([^'"]+)['"]/);
        const apiKeyMatch = configContent.match(/apiKey:\s*['"]([^'"]+)['"]/);
        const tableIdMatch = configContent.match(/tableId:\s*['"]([^'"]+)['"]/);

        if (!baseIdMatch || !apiKeyMatch || !tableIdMatch) {
            log('❌ ERROR: Could not parse config.js', 'red');
            return;
        }

        const AIRTABLE_CONFIG = {
            baseId: baseIdMatch[1],
            apiKey: apiKeyMatch[1],
            tableId: tableIdMatch[1]
        };

        log(`   ✓ Base ID: ${AIRTABLE_CONFIG.baseId}`, 'green');
        log(`   ✓ API Key: ${AIRTABLE_CONFIG.apiKey.substring(0, 10)}... (${AIRTABLE_CONFIG.apiKey.length} chars)`, 'green');
        log(`   ✓ Table ID: ${AIRTABLE_CONFIG.tableId}`, 'green');

        // Check API key length
        if (AIRTABLE_CONFIG.apiKey.length < 20) {
            log('\n   ⚠️  WARNING: API key seems unusually short!', 'yellow');
            log('   Airtable Personal Access Tokens are typically 40+ characters.', 'yellow');
            log('   Your key is only ' + AIRTABLE_CONFIG.apiKey.length + ' characters.', 'yellow');
        }

        // Step 2: Build URL
        log('\n🔗 Step 2: Building Airtable API URL...', 'blue');
        const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_CONFIG.baseId}/${AIRTABLE_CONFIG.tableId}`;
        log(`   ✓ URL: ${AIRTABLE_URL}`, 'green');

        // Step 3: Test connection
        log('\n🌐 Step 3: Testing API connection...', 'blue');
        log('   Sending request to Airtable...', 'cyan');

        const startTime = Date.now();

        const response = await fetch(AIRTABLE_URL, {
            headers: {
                'Authorization': `Bearer ${AIRTABLE_CONFIG.apiKey}`
            }
        });

        const endTime = Date.now();
        const duration = endTime - startTime;

        log(`   ⏱  Response received in ${duration}ms`, 'cyan');
        log(`   📊 Status: ${response.status} ${response.statusText}`, response.ok ? 'green' : 'red');

        // Step 4: Handle response
        if (!response.ok) {
            log('\n❌ Step 4: ERROR - Request failed', 'red');
            const errorText = await response.text();

            log(`\n   Response body:`, 'red');
            log(`   ${errorText.substring(0, 500)}`, 'red');

            separator();
            log('\n🔍 DIAGNOSIS:', 'yellow');

            if (response.status === 401) {
                log('   ❌ Authentication Failed (401)', 'red');
                log('   Your API key is invalid or incomplete.', 'yellow');
                log('\n   HOW TO FIX:', 'cyan');
                log('   1. Go to https://airtable.com/create/tokens', 'cyan');
                log('   2. Create a new Personal Access Token with:');
                log('      - data.records:read scope');
                log('      - data.records:write scope');
                log('      - Access to your specific base');
                log('   3. Copy the FULL token (should be 40+ characters)');
                log('   4. Update config.js with the complete token');
            } else if (response.status === 404) {
                log('   ❌ Not Found (404)', 'red');
                log('   The base ID or table ID is incorrect.', 'yellow');
                log('\n   HOW TO FIX:', 'cyan');
                log('   1. Open your Airtable base');
                log('   2. Go to Help > API documentation');
                log('   3. Copy the correct base ID and table ID');
                log('   4. Update config.js');
            } else if (response.status === 403) {
                log('   ❌ Forbidden (403)', 'red');
                log('   Your API token lacks permission to access this base.', 'yellow');
                log('\n   HOW TO FIX:', 'cyan');
                log('   1. Check your token has access to this base');
                log('   2. Ensure the token has read/write permissions');
            } else {
                log(`   ❌ Unexpected Error (${response.status})`, 'red');
                log('   Check the error details above.', 'yellow');
            }

            separator();
            return;
        }

        // Step 5: Parse data
        log('\n✅ Step 4: Parsing response data...', 'blue');
        const data = await response.json();

        log(`   ✓ JSON parsed successfully`, 'green');

        if (!data.records) {
            log('   ❌ ERROR: No "records" field in response', 'red');
            log(`   Response keys: ${Object.keys(data).join(', ')}`, 'yellow');
            return;
        }

        log(`   ✓ Found ${data.records.length} record(s)`, 'green');

        // Step 6: Display sample data
        if (data.records.length > 0) {
            log('\n📦 Step 5: Sample record data:', 'blue');
            const sample = data.records[0];
            log(`   Record ID: ${sample.id}`, 'cyan');
            log('   Fields:', 'cyan');
            Object.keys(sample.fields).forEach(key => {
                const value = JSON.stringify(sample.fields[key]);
                log(`     • ${key}: ${value}`, 'cyan');
            });
        } else {
            log('\n⚠️  Step 5: Table is empty (no records)', 'yellow');
            log('   This is okay, but you may want to add some test data.', 'yellow');
        }

        // Success summary
        log('\n');
        separator();
        log('✅ ALL TESTS PASSED!', 'green');
        separator();
        log('\n📊 Summary:', 'cyan');
        log(`   • API connection: ✓ Working`, 'green');
        log(`   • Authentication: ✓ Valid`, 'green');
        log(`   • Base/Table access: ✓ Accessible`, 'green');
        log(`   • Records found: ${data.records.length}`, 'green');
        log('\n💡 If the web app still shows a spinner:', 'yellow');
        log('   1. Clear your browser cache (Ctrl+Shift+Delete)', 'cyan');
        log('   2. Hard refresh the page (Ctrl+Shift+R)', 'cyan');
        log('   3. Open browser DevTools (F12) and check the Console tab', 'cyan');
        log('   4. Look for any JavaScript errors in red', 'cyan');
        separator();

    } catch (error) {
        log('\n❌ FATAL ERROR:', 'red');
        log(`   ${error.message}`, 'red');

        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            log('\n   ⚠️  Note: fetch() requires Node.js 18+', 'yellow');
            log('   Run: node --version to check your Node.js version', 'cyan');
        }

        separator();
    }
}

// Run the test
log('\n');
testAirtableConnection().catch(err => {
    log('\n❌ Unhandled error:', 'red');
    log(err.stack, 'red');
    process.exit(1);
});
