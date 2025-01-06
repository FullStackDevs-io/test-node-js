const express = require('express');
const fs = require('fs');
const path = require('path');
const { validatePrice } = require('../helpers/validate');
const router = express.Router();

// Path to mock database
const dataPath = path.join(__dirname, '../data/grains.json');
let grainsData = require(dataPath);

// Get all grains and their current prices
router.get('/', (req, res) => {
    // Transform grainsData.grains into an array of objects with type and currentPrice.
    // Example response format:
    // {
    //   "grains": [
    //     { "type": "wheat", "currentPrice": 10.5 },
    //     { "type": "corn", "currentPrice": 8.3 }
    //   ]
    // }
    res.status(200).json({ message: 'GET /grains TODO' });
});

// Update the price of a specific grain
router.post('/:type/price', (req, res) => {
    // Validate the type and price parameters.
    // Update the currentPrice of the specified grain.
    // Add the updated price along with a timestamp to the history array.
    // Save the updated grains data back to the mock database.
    // Example history format:
    // {
    //   "price": 12.0,
    //   "timestamp": "2024-01-05T12:34:56Z"
    // }

    res.status(200).json({ message: 'POST /grains/:type/price TODO' });
});

// Get the price history of a specific grain
router.get('/:type/history', (req, res) => {
    // Validate the type parameter.
    // Return the history array for the specified grain, including all price changes with timestamps.
    // Example response format:
    // {
    //   "history": [
    //     { "price": 9.5, "timestamp": "2024-01-01T12:00:00Z" },
    //     { "price": 10.5, "timestamp": "2024-01-02T14:00:00Z" }
    //   ]
    // }

    res.status(200).json({ message: 'GET /:type/history TODO' });
});

module.exports = router;
