const express = require('express');
const router = express.Router();

// Define your route handlers for orders
router.get('/', (req, res) => {
    res.send('Fetching all orders');
});

router.get('/:id', (req, res) => {
    res.send(`Fetching order with ID: ${req.params.id}`);
});

// Export the router instance
module.exports = router;