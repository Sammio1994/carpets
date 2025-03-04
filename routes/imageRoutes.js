const express = require('express');
const router = express.Router();
const Product = require('./models/Product.js');
const axios = require('axios');


// Unsplash API credentials
const UNSPLASH_ACCESS_KEY = 'lsA3B_jAyBXVwPBE_S5_CWmmYyvmEaQdUbsRZ9Dmzwo'; // Replace with your Unsplash API key

// Route to fetch carpet images from Unsplash
router.get("https://unsplash.com/s/photos/carpets", async (req, res) => {
  try {
    const response = await axios.get('https://unsplash.com/s/photos/carpets', {
      params: {
        query: 'carpets',
        client_id: UNSPLASH_ACCESS_KEY,
        per_page: 10, // You can adjust the number of images you want to fetch
      },
    });

    const images = response.data.results.map((img) => ({
      id: img.id,
      description: img.alt_description,
      url: img.urls.small,
      author: img.user.name,
    }));

    res.json(images); // Send the images to the frontend
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    res.status(500).json({ message: 'Failed to fetch images' });
  }
});

module.exports = router;