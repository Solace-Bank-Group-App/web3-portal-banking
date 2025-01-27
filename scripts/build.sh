#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")/.."

# Build the application
echo "Building the application..."
npm run build
