const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// API endpoint to serve config without exposing it in client code
app.get('/api/config', (req, res) => {
    res.json({
        baseId: process.env.AIRTABLE_BASE_ID || 'appitB9dLQE7CzqpR',
        apiKey: process.env.AIRTABLE_API_KEY,
        tableId: process.env.AIRTABLE_TABLE_ID || 'tblR5cWG21aBDfi49'
    });
});

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Health check endpoint for Heroku
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`🚀 Inventory Tracker running on port ${PORT}`);
    console.log(`📂 Serving files from: ${__dirname}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
});
