# Vercel Deployment Instructions for Feastly

This document provides step-by-step instructions for deploying the Feastly application (backend, frontend, and admin) to Vercel.

## Prerequisites

1. A Vercel account (sign up at https://vercel.com)
2. Vercel CLI installed (optional, but helpful)
   ```
   npm install -g vercel
   ```
3. Git repository with your code

## Deployment Steps

### 1. Backend Deployment

1. Navigate to https://vercel.com/new
2. Import your Git repository or select "Import Third-Party Git Repository" if it's not already connected
3. Select the `backend` directory as the root directory
4. Configure the project with the following settings:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `.`
   - Install Command: `npm install`
5. Add the following environment variables:
   - `JWT_SECRET`: Your JWT secret key
   - `STRIPE_SECRET_KEY`: Your Stripe secret key
   - `MONGODB_URI`: Your MongoDB connection string
6. Click "Deploy"
7. Note the deployment URL (e.g., `https://feastly-backend.vercel.app`)

### 2. Frontend Deployment

1. Navigate to https://vercel.com/new
2. Import your Git repository
3. Select the `frontend` directory as the root directory
4. Configure the project with the following settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Add the following environment variables:
   - `VITE_BACKEND_URL`: The URL of your deployed backend (e.g., `https://feastly-backend.vercel.app`)
6. Click "Deploy"

### 3. Admin Deployment

1. Navigate to https://vercel.com/new
2. Import your Git repository
3. Select the `admin` directory as the root directory
4. Configure the project with the following settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Add the following environment variables:
   - `VITE_BACKEND_URL`: The URL of your deployed backend (e.g., `https://feastly-backend.vercel.app`)
6. Click "Deploy"

## Post-Deployment Configuration

After deploying all three applications, you need to update the CORS settings in your backend to allow requests from your frontend and admin domains:

1. Go to your Vercel dashboard
2. Select your backend project
3. Go to "Settings" > "Environment Variables"
4. Add the following environment variables:
   - `FRONTEND_URL`: The URL of your deployed frontend (e.g., `https://feastly-frontend.vercel.app`)
   - `ADMIN_URL`: The URL of your deployed admin (e.g., `https://feastly-admin.vercel.app`)

## Troubleshooting

If you encounter any issues during deployment:

1. Check the build logs in Vercel for error messages
2. Ensure all environment variables are correctly set
3. Verify that your vercel.json files are correctly configured
4. Make sure your backend is properly handling CORS

## Updating Your Deployment

To update your deployment after making changes to your code:

1. Push your changes to your Git repository
2. Vercel will automatically redeploy your application

## Monitoring

Vercel provides built-in monitoring and analytics for your deployed applications. You can access these from your Vercel dashboard.
