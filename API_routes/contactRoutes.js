const express = require('express');
const router = express.Router();

// Define your route handlers for contacts
router.get('/', (req, res) => {
    res.send('Fetching all contacts');
});

router.get('/:id', (req, res) => {
    res.send(`Fetching contact with ID: ${req.params.id}`);
});

// Export the router instance
module.exports = router;