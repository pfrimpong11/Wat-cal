// config/db.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const reading = require('../src/controllers/mbusController');

dotenv.config();

const interval = 15 * 60 * 1000; // 15 minutes in milliseconds
const delayBetweenReadings = 2 * 60 * 1000; // 2 minutes in milliseconds

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      //useNewUrlParser: true,
      //useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const filePaths = [
      path.join(__dirname, '../MBusData1.xml'),  // Adjust file names and paths as needed
      path.join(__dirname, '../MBusData2.xml'),  // Adjust file names and paths as needed

];

reading.readMetersSequentially(filePaths, interval, delayBetweenReadings); // Start the reading cycle
};

module.exports = connectDB; // Corrected typo here
