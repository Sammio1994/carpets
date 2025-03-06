const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize app
const app = express();

const productRoutes = require('./API_routes/productRoutes'); 
const contactRoutes = require('./API_routes/contactRoutes'); 
const orderRoutes = require('./API_routes/orderRoutes'); 
const galleryRoutes = require('./API_routes/galleryRoutes'); 

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes with unique paths
app.use('/api/products', productRoutes); 
app.use('/api/contact', contactRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/gallery', galleryRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI,)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});