const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const pool = require('./db'); // make sure to replace './db' with the actual path to your db configuration

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Fetch user ID by email
app.get('/api/userId', async (req, res) => {
  const { email } = req.query;

  try {
    const result = await pool.query('SELECT "User_ID" FROM "MeterUsers"."Users" WHERE "Email" = $1', [email]);

    if (result.rows.length === 0) {
      return res.status(404).send('User not found');
    }

    res.status(200).json({ userId: result.rows[0].User_ID });
  } catch (error) {
    console.error('Error fetching user ID:', error);
    res.status(500).send('Internal server error');
  }
});

// Update user information
app.put('/api/user/:userId', async (req, res) => {
  const userId = req.params.userId;
  const { username, email, password, address, room_name, meter_type, installation_date } = req.body;

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const updateUserQuery = `
      UPDATE "MeterUsers"."Users"
      SET "Username" = COALESCE($2, "Username"), "Email" = COALESCE($3, "Email"), "Password" = COALESCE($4, "Password")
      WHERE "User_ID" = $1
    `;
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;
    await client.query(updateUserQuery, [userId, username, email, hashedPassword]);

    const homeIdQuery = `
      SELECT "Home_ID"
      FROM "MeterUsers"."Homes"
      WHERE "Landlord_ID" = $1
    `;
    const homeResult = await client.query(homeIdQuery, [userId]);
    const homeId = homeResult.rows[0] ? homeResult.rows[0].Home_ID : null;

    if (homeId && address) {
      const updateHomeQuery = `
        UPDATE "MeterUsers"."Homes"
        SET "Address" = $2
        WHERE "Home_ID" = $1
      `;
      await client.query(updateHomeQuery, [homeId, address]);
    }

    const roomIdQuery = `
      SELECT "Room_ID"
      FROM "MeterUsers"."Rooms"
      WHERE "Home_ID" = $1
    `;
    const roomResult = await client.query(roomIdQuery, [homeId]);
    const roomId = roomResult.rows[0] ? roomResult.rows[0].Room_ID : null;

    if (roomId && room_name) {
      const updateRoomQuery = `
        UPDATE "MeterUsers"."Rooms"
        SET "Room_name" = $2
        WHERE "Room_ID" = $1
      `;
      await client.query(updateRoomQuery, [roomId, room_name]);
    }

    const meterIdQuery = `
      SELECT "Meter_ID"
      FROM "MeterUsers"."Electric_meters"
      WHERE "Room_ID" = $1
    `;
    const meterResult = await client.query(meterIdQuery, [roomId]);
    const meterId = meterResult.rows[0] ? meterResult.rows[0].Meter_ID : null;

    if (meterId && meter_type && installation_date) {
      const updateMeterQuery = `
        UPDATE "MeterUsers"."Electric_meters"
        SET "Meter_Type" = $2, "Installation_Date" = $3
        WHERE "Meter_ID" = $1
      `;
      await client.query(updateMeterQuery, [meterId, meter_type, installation_date]);
    }

    await client.query('COMMIT');
    res.status(200).send('User information updated successfully');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error updating user information:', error);
    res.status(500).send('Internal server error');
  } finally {
    client.release();
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


