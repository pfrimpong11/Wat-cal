const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const pool = require('./db'); // make sure to replace './db' with the actual path to your db configuration

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Signup route for landlord
app.post('/landlord/signup', async (req, res) => {
  const { username, email, password, address, room_name, meter_type, installation_date } = req.body;

  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert landlord into the users table
    const insertUserQuery = `
      INSERT INTO "MeterUsers"."Users" (username, email, password, "User_Type")
      VALUES ($1, $2, $3, $4)
      RETURNING "User_ID"
    `;
    const userResult = await client.query(insertUserQuery, [username, email, hashedPassword, 'Landlord']);
    const landlordId = userResult.rows[0].User_ID;

    // Insert home details
    const insertHomeQuery = `
      INSERT INTO "MeterUsers"."Homes" ("Address", "Landlord_ID")
      VALUES ($1, $2)
      RETURNING "Home_ID"
    `;
    const homeResult = await client.query(insertHomeQuery, [address, landlordId]);
    const homeId = homeResult.rows[0].Home_ID;

    // Insert room details
    const insertRoomQuery = `
      INSERT INTO "MeterUsers"."Rooms" ("Room_name", "Home_ID")
      VALUES ($1, $2)
      RETURNING "Room_ID"
    `;
    const roomResult = await client.query(insertRoomQuery, [room_name, homeId]);
    const roomId = roomResult.rows[0].Room_ID;

    // Insert electric meter details
    const insertMeterQuery = `
      INSERT INTO "MeterUsers"."Electric_meters" ("Room_ID", "Meter_Type", "Installation_Date")
      VALUES ($1, $2, $3)
    `;
    await client.query(insertMeterQuery, [roomId, meter_type, installation_date]);

    await client.query('COMMIT');
    res.status(201).send('Landlord and associated details created successfully');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error creating landlord and associated details:', error);
    res.status(500).send('Internal server error');
  } finally {
    client.release();
  }
});

// Signup route for tenant
app.post('/tenant/signup', async (req, res) => {
  const { username, email, password, address, room_name, meter_type, installation_date } = req.body;

  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert tenant into the users table
    const insertUserQuery = `
      INSERT INTO "MeterUsers"."Users" (username, email, password, "User_Type")
      VALUES ($1, $2, $3, $4)
      RETURNING "User_ID"
    `;
    const userResult = await client.query(insertUserQuery, [username, email, hashedPassword, 'Tenant']);
    const tenantId = userResult.rows[0].User_ID;

    // Insert home details
    const insertHomeQuery = `
      INSERT INTO "MeterUsers"."Homes" ("Address")
      VALUES ($1)
      RETURNING "Home_ID"
    `;
    const homeResult = await client.query(insertHomeQuery, [address]);
    const homeId = homeResult.rows[0].Home_ID;

    // Insert room details
    const insertRoomQuery = `
      INSERT INTO "MeterUsers"."Rooms" ("Room_name", "Home_ID")
      VALUES ($1, $2)
      RETURNING "Room_ID"
    `;
    const roomResult = await client.query(insertRoomQuery, [room_name, homeId]);
    const roomId = roomResult.rows[0].Room_ID;

    // Insert electric meter details
    const insertMeterQuery = `
      INSERT INTO "MeterUsers"."Electric_meters" ("Room_ID", "Meter_Type", "Installation_Date")
      VALUES ($1, $2, $3)
    `;
    await client.query(insertMeterQuery, [roomId, meter_type, installation_date]);

    await client.query('COMMIT');
    res.status(201).send('Tenant and associated details created successfully');
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error creating tenant and associated details:', error);
    res.status(500).send('Internal server error');
  } finally {
    client.release();
  }
});

// Update user information endpoint
app.put('/user/:userId', async (req, res) => {
  const userId = req.params.userId;
  const { username, email, password, address, room_name } = req.body;

  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');

    // Update user information
    const updateUserQuery = `
      UPDATE "MeterUsers"."Users"
      SET username = COALESCE($2, username), email = COALESCE($3, email), password = COALESCE($4, password)
      WHERE "User_ID" = $1
    `;
    await client.query(updateUserQuery, [userId, username, email, password]);

    // Get home ID associated with the user
    const homeIdQuery = `
      SELECT "Home_ID"
      FROM "MeterUsers"."Homes"
      WHERE "Landlord_ID" = $1 OR "Tenant_ID" = $1
    `;
    const homeResult = await client.query(homeIdQuery, [userId]);
    const homeId = homeResult.rows[0].Home_ID;

    // Update home address if provided
    if (address) {
      const updateHomeQuery = `
        UPDATE "MeterUsers"."Homes"
        SET "Address" = $2
        WHERE "Home_ID" = $1
      `;
      await client.query(updateHomeQuery, [homeId, address]);
    }

    // Get room ID associated with the user
    const roomIdQuery = `
      SELECT "Room_ID"
      FROM "MeterUsers"."Rooms"
      WHERE "Home_ID" = $1
    `;
    const roomResult = await client.query(roomIdQuery, [homeId]);
    const roomId = roomResult.rows[0].Room_ID;

    // Update room name if provided
    if (room_name) {
      const updateRoomQuery = `
        UPDATE "MeterUsers"."Rooms"
        SET "Room_name" = $2
        WHERE "Room_ID" = $1
      `;
      await client.query(updateRoomQuery, [roomId, room_name]);
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


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
