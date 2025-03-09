#!/bin/bash

# Feastly Deployment Script for Vercel

echo "Feastly Deployment Script"
echo "========================="
echo ""

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "Vercel CLI is not installed. Installing now..."
    npm install -g vercel
fi

# Login to Vercel if not already logged in
echo "Ensuring you're logged in to Vercel..."
vercel whoami || vercel login

# Deploy Backend
echo ""
echo "Deploying Backend..."
cd backend
vercel --prod
BACKEND_URL=$(vercel --prod --confirm | grep -o 'https://[^ ]*' | head -1)
cd ..

echo "Backend deployed to: $BACKEND_URL"
echo ""

# Deploy Frontend
echo "Deploying Frontend..."
cd frontend
vercel --env VITE_BACKEND_URL=$BACKEND_URL --prod
FRONTEND_URL=$(vercel --prod --confirm | grep -o 'https://[^ ]*' | head -1)
cd ..

echo "Frontend deployed to: $FRONTEND_URL"
echo ""

# Deploy Admin
echo "Deploying Admin..."
cd admin
vercel --env VITE_BACKEND_URL=$BACKEND_URL --prod
ADMIN_URL=$(vercel --prod --confirm | grep -o 'https://[^ ]*' | head -1)
cd ..

echo "Admin deployed to: $ADMIN_URL"
echo ""

# Update Backend Environment Variables
echo "Updating Backend Environment Variables..."
cd backend
vercel env add FRONTEND_URL $FRONTEND_URL
vercel env add ADMIN_URL $ADMIN_URL
vercel --prod --confirm
cd ..

echo ""
echo "Deployment Complete!"
echo "===================="
echo "Backend URL: $BACKEND_URL"
echo "Frontend URL: $FRONTEND_URL"
echo "Admin URL: $ADMIN_URL"
echo ""
echo "Note: You may need to manually set your MongoDB URI, JWT_SECRET, and STRIPE_SECRET_KEY in the Vercel dashboard." 