#!/bin/bash

# EcoTrack Development Server Startup Script
# This script ensures the correct development environment

echo "🌱 Starting EcoTrack Carbon Dashboard..."
echo "📁 Project Type: Static HTML"
echo "🚀 Server: Python HTTP Server"
echo "🔗 Port: 8000"
echo ""

# Check if Python 3 is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3 to continue."
    exit 1
fi

echo "✅ Python 3 found: $(python3 --version)"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ index.html not found. Please run this script from the project root directory."
    exit 1
fi

echo "✅ Project files found"
echo ""

# Start the development server
echo "🚀 Starting development server..."
echo "📱 Access your app at: http://localhost:8000"
echo "🔑 Login with: demo@example.com / demo"
echo ""
echo "Press Ctrl+C to stop the server"
echo "================================================="

python3 -m http.server 8000
