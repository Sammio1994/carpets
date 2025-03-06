// https://unsplash.com/s/photos/carpets
const express = require('express');
const router = express.Router();  // Creates a new router instance

// Define your route handlers
router.get('/', (req, res) => {
    res.send('Fetching all products');
});

router.get('/:id', (req, res) => {
    res.send(`Fetching product with ID: ${req.params.id}`);
});

// Export the router (ensure it's not an object or function)
module.exports = router;  // This is what should be exported