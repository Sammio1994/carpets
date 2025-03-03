// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const Contact = require('./models/Contact.js');

// Handle contact form submission
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const contact = new Contact({ name, email, message });
  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;