// CLOTHING BOUTIQUE BACKEND
// 
// INSTALLATION STEPS:
// 1. Run: npm install express mongoose dotenv cors bcrypt jsonwebtoken multer cloudinary
// 2. Create a .env file and fill in your environment variables
// 3. Start MongoDB locally or use MongoDB Atlas
// 4. Run: node server.js
//
// The server will start on the PORT specified in .env (default: 5000)

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

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
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Clothing Boutique API is running' });
});

// Error handler middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
