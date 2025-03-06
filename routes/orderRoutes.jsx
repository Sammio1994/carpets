// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const Order = require('../models/Order.js');

// Handle new order (sample request)
router.post('/', async (req, res) => {
  const { name, email, address, product } = req.body;
  const order = new Order({ name, email, address, product });
  try {
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;