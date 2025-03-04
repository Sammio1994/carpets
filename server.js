// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes/productRoutes.js');
const imageRoutes = require('./routes/imageRoutes.js'); 

dotenv.config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use('https://unsplash.com/s/photos/carpets', imageRoutes);

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI);
// const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Your other server code (e.g., starting Express server)


// Routes
app.use('https://unsplash.com/s/photos/carpets', productRoutes);
app.use('/contact', require('./routes/contactRoutes.js'));
app.use('/order', require('./routes/orderRoutes.js'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
