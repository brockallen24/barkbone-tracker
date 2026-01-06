#!/bin/bash

# Interactive Config Updater
# This script helps you update your Airtable credentials

echo ""
echo "════════════════════════════════════════════════════════════"
echo "  📝 Airtable Configuration Updater"
echo "════════════════════════════════════════════════════════════"
echo ""

echo "Current configuration:"
echo "  Base ID: appitB9dLQE7CzqpR"
echo "  Table ID: tblR5cWG21aBDfi49"
echo "  API Key: pat8QSTRS6XBfKY0N (⚠️  INCOMPLETE - only 17 chars)"
echo ""

echo "To get your FULL API key:"
echo "  1. Go to: https://airtable.com/create/tokens"
echo "  2. Copy your COMPLETE token (40+ characters)"
echo ""

read -p "Paste your FULL API token here: " NEW_API_KEY

# Validate length
if [ ${#NEW_API_KEY} -lt 30 ]; then
    echo ""
    echo "❌ ERROR: Token too short (${#NEW_API_KEY} characters)"
    echo "   Airtable tokens are typically 40+ characters"
    echo "   Please copy the COMPLETE token"
    exit 1
fi

# Update config.js
cat > config.js << EOF
// Airtable Configuration
const AIRTABLE_CONFIG = {
    baseId: 'appitB9dLQE7CzqpR',
    apiKey: '${NEW_API_KEY}',
    tableId: 'tblR5cWG21aBDfi49',
};
EOF

echo ""
echo "✅ Config updated successfully!"
echo "   API Key: ${NEW_API_KEY:0:10}... (${#NEW_API_KEY} characters)"
echo ""
echo "Now testing the connection..."
echo ""

# Test the connection
node test-api.js

echo ""
echo "════════════════════════════════════════════════════════════"
echo "If the test passed, open index.html in your browser!"
echo "════════════════════════════════════════════════════════════"
