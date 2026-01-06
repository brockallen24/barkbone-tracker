#!/bin/bash

# Local Web Server Starter
# This script starts a simple web server to run your app

echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║  🚀 Starting Inventory Tracker Application            ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

cd "$(dirname "$0")"

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    PORT=8000
    echo "✓ Starting local web server on port $PORT..."
    echo ""
    echo "📂 Serving files from: $(pwd)"
    echo "🌐 Open your browser to:"
    echo ""
    echo "   http://localhost:$PORT"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    echo "═══════════════════════════════════════════════════════"
    echo ""

    python3 -m http.server $PORT

elif command -v python &> /dev/null; then
    PORT=8000
    echo "✓ Starting local web server on port $PORT..."
    echo ""
    echo "📂 Serving files from: $(pwd)"
    echo "🌐 Open your browser to:"
    echo ""
    echo "   http://localhost:$PORT"
    echo ""
    echo "Press Ctrl+C to stop the server"
    echo ""
    echo "═══════════════════════════════════════════════════════"
    echo ""

    python -m SimpleHTTPServer $PORT

else
    echo "❌ Error: Python not found"
    echo ""
    echo "Please install Python or use one of these alternatives:"
    echo ""
    echo "Option 1: Install Python"
    echo "  - Visit: https://www.python.org/downloads/"
    echo ""
    echo "Option 2: Use Node.js"
    echo "  npm install -g http-server"
    echo "  http-server -p 8000"
    echo ""
    echo "Option 3: Use PHP"
    echo "  php -S localhost:8000"
    echo ""
    exit 1
fi
