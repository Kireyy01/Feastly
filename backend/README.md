# Feastly Backend

This is the backend API for the Feastly application.

## Deployment to Render

### Option 1: Deploy via Dashboard

1. Sign up or log in to [Render](https://render.com)
2. Click on "New +" and select "Web Service"
3. Connect your GitHub repository
4. Select the backend directory
5. Configure the service:
   - Name: feastly-backend
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
6. Add the following environment variables:
   - `JWT_SECRET`: Your JWT secret key
   - `STRIPE_SECRET_KEY`: Your Stripe secret key
   - `MONGO_URI`: Your MongoDB connection string
   - `NODE_ENV`: "production"
   - `FRONTEND_URL`: Your frontend URL
   - `ADMIN_URL`: Your admin URL
7. Click "Create Web Service"

### Option 2: Deploy via render.yaml

1. Push the render.yaml file to your repository
2. Go to [Render Blueprint](https://render.com/deploy)
3. Connect your repository
4. Render will automatically detect the render.yaml file and configure the service
5. Click "Apply"

## API Endpoints

- `GET /api/food`: Get all food items
- `POST /api/user/register`: Register a new user
- `POST /api/user/login`: Login a user
- `GET /api/cart`: Get user's cart
- `POST /api/order`: Create a new order

## Local Development

1. Install dependencies: `npm install`
2. Start the server: `npm run server`
3. The server will run on http://localhost:3000
