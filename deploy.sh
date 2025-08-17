#!/bin/bash

# TryOn AI - Nhost Deployment Script

echo "🚀 Deploying TryOn AI to Nhost..."

# Build the frontend
echo "📦 Building frontend..."
npm run build

# Deploy to Nhost
echo "☁️ Deploying to Nhost..."
nhost deploy

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Update your environment variables in the Nhost dashboard"
echo "2. Configure your custom domain (if needed)"
echo "3. Update the widget.js NHOST_FUNCTIONS_URL"
echo "4. Test your deployment"