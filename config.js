// Airtable Configuration
// This file is served dynamically from environment variables by index.php
// When accessed as /config.js, index.php will inject the actual credentials
const AIRTABLE_CONFIG = {
        baseId: process.env.AIRTABLE_BASE_ID || 'app79OgMIUBu9sCpq',
        apiKey: process.env.AIRTABLE_API_KEY || '',
        tableId: process.env.AIRTABLE_TABLE_ID || 'tbl0w2qfQMtTI7fwh'
};
