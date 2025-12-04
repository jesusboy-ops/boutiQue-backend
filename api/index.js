import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import serverless from 'serverless-http';
import connectDB from '../config/db.js';
import errorHandler from '../middleware/errorHandler.js';
import productRoutes from '../routes/productRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import orderRoutes from '../routes/orderRoutes.js';
import categoryRoutes from '../routes/categoryRoutes.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/categories', categoryRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Clothing Boutique API is running on Vercel' });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Clothing Boutique API is running on Vercel' });
});

// Error handler middleware (must be last)
app.use(errorHandler);

// Export for Vercel serverless
export default serverless(app);
