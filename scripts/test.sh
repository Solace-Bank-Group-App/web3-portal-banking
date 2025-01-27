#!/bin/bash

# Navigate to the project directory
cd "$(dirname "$0")/.."

# Run tests
echo "Running tests..."
npm test
