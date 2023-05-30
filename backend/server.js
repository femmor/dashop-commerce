import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import products from './data/products.js';

// DB CONNECTION
import connectDB from './config/db.js';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

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
