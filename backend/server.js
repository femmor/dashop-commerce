import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import products from './data/products.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import {
  errorHandler,
  notFound,
} from './middleware/errorMiddleware.js';

// DB CONNECTION
import connectDB from './config/db.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// 404 error middleware
app.use(notFound);

// Request error middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5005;

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server!');
  }
};

startServer();
