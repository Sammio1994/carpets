const express = require('express');
const router = express.Router();

// Define your route handlers for the gallery
router.get('/', (req, res) => {
    res.send('Fetching all gallery items');
});

router.get('/:id', (req, res) => {
    res.send(`Fetching gallery item with ID: ${req.params.id}`);
});

// Export the router instance
module.exports = router;