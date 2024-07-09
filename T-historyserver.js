////MODELS 

/* // models/Container.js
const mongoose = require('mongoose');

const containerSchema = new mongoose.Schema({
    containerName: String,
    month: String, // Assuming you store month information
    consumptionData: [
        {
            date: Date,
            readingTime: String,
            readingValue: Number,
            lastReadingTime: String,
            lastReadingValue: Number
        }
    ]
});

module.exports = mongoose.model('Container', containerSchema);
 */



//// ROUTES

/* const express = require('express');
const router = express.Router();
const containerController = require('../controllers/containerController');

// Route for fetching consumption data for a specific month
router.get('/api/consumption/:month', containerController.getConsumptionByMonth);

module.exports = router; */




////CONTROLLER

/* const Container = require('../models/Container');

// Controller function to get consumption data by month
exports.getConsumptionByMonth = async (req, res) => {
    const month = req.params.month.toLowerCase(); // Month parameter from the route

    try {
        // Fetch container data for the given month
        const container = await Container.findOne({ month }); // Assuming 'month' is a field in your Container schema

        if (!container) {
            return res.status(404).json({ error: 'No data found for this month.' });
        }

        // Prepare data as needed
        const data = {
            containerName: container.containerName,
            consumptionData: container.consumptionData.map(data => ({
                date: data.date,
                readingTime: data.readingTime,
                readingValue: data.readingValue,
                lastReadingTime: data.lastReadingTime,
                lastReadingValue: data.lastReadingValue
            }))
        };

        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Server error.' });
    }
};
 */
