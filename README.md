# Clothing Boutique Backend API

A complete Node.js backend for a clothing boutique with Express and MongoDB, ready for Vercel serverless deployment.

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env` file (or Vercel dashboard)

3. Run locally:
```bash
npm start
```

## Vercel Deployment

1. Install Vercel CLI (optional):
```bash
npm i -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

3. Set environment variables in Vercel dashboard:
   - MONGO_URI
   - JWT_SECRET
   - CLOUDINARY_CLOUD_NAME
   - CLOUDINARY_API_KEY
   - CLOUDINARY_API_SECRET

4. Your API will be live at: `https://your-project.vercel.app`

## Environment Variables

Create a `.env` file with:
- PORT
- MONGO_URI
- JWT_SECRET
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET

## API Endpoints

### Products
- GET /api/products - Get all products (with search, filter, pagination)
- GET /api/products/:id - Get single product
- POST /api/products - Create product (Admin)
- PUT /api/products/:id - Update product (Admin)
- DELETE /api/products/:id - Delete product (Admin)
- POST /api/products/:id/images - Upload images (Admin)

### Users
- POST /api/users/register - Register user
- POST /api/users/login - Login user
- GET /api/users/profile - Get profile (Auth)
- PUT /api/users/profile - Update profile (Auth)

### Orders
- POST /api/orders - Create order (Auth)
- GET /api/orders/myorders - Get user orders (Auth)
- GET /api/orders/:id - Get order by ID (Auth)
- GET /api/orders - Get all orders (Admin)
- PUT /api/orders/:id/status - Update order status (Admin)

### Categories
- GET /api/categories - Get all categories
- GET /api/categories/:id - Get single category
- POST /api/categories - Create category (Admin)
- PUT /api/categories/:id - Update category (Admin)
- DELETE /api/categories/:id - Delete category (Admin)

## Features

- JWT authentication
- Role-based access control (user/admin)
- Image upload with Cloudinary
- Product search, filtering, and pagination
- Password hashing with bcrypt
- Error handling middleware
