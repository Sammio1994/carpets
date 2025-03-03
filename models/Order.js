// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  product: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);