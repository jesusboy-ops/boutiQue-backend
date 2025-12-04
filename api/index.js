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

const app = express();

// CORS Configuration for Vercel
app.use(cors({
  origin: '*', // Allow all origins (or specify your frontend URL)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Handle preflight requests
app.options('*', cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection middleware
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(500).json({ 
      message: 'Database connection failed', 
      error: error.message 
    });
  }
});

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
