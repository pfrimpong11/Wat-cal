const { Pool } = require('pg');
const pool = require('./db');
const cron = require('node-cron');

// Function to generate a random number between min (inclusive) and max (exclusive)
const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Function to generate random readings in watts
const generateReadings = () => {
  const readings = [];

  // Number of readings to generate
  const numReadings = 50;

  for (let i = 0; i < numReadings; i++) {
    // Random values for Meter_ID and Reading_Value
    const meterId = Math.floor(getRandomNumber(1, 11)); // Assuming 10 meters exist
    const readingValue = getRandomNumber(100, 1000); // Random value between 100 and 1000 watts

    const reading = {
      Meter_ID: meterId,
      Reading_Value: readingValue.toFixed(2), // Round to 2 decimal places
      Reading_Date: new Date().toISOString().slice(0, 10), // Current date in YYYY-MM-DD format
    };

    readings.push(reading);
  }

  return readings;
};

// Function to insert readings into the database
const insertReadings = async () => {
  const readings = generateReadings();

  try {
    await pool.connect(async (client) => {
      // Begin transaction
      await client.query('BEGIN');

      // Insert each reading
      for (const reading of readings) {
        await client.query(
          'INSERT INTO "MeterUsers"."Reading" ("Meter_ID", "Reading_Value", "Reading_Date") VALUES ($1, $2, $3)',
          [reading.Meter_ID, reading.Reading_Value, reading.Reading_Date]
        );
      }

      // Commit transaction
      await client.query('COMMIT');

      console.log('Readings inserted successfully.');
    });
  } catch (error) {
    // If any error occurs, rollback the transaction
    await client.query('ROLLBACK');
    console.error('Error inserting readings:', error);
  } finally {
    // Release the client back to the pool
    pool.end();
  }
};

// Define a cron job to run the insertReadings function every day at midnight (00:00)
cron.schedule('0 0 * * *', async () => {
  console.log('Running cron job to generate and insert readings...');
  await insertReadings();
});

// You can also run the function immediately for the first time
insertReadings();
