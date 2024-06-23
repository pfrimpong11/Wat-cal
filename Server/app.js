// app.js
const express = require('express');
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const pool = require('./db');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Example route to get all users
app.get('/api/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM "MeterUsers"."Users"');
    res.json(rows);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new user
app.post(
  '/api/users',
  [
    body('Username').notEmpty(),
    body('Password').notEmpty(),
    body('Email').isEmail(),
    body('User_Type').isIn(['Landlord', 'Tenant']),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { Username, Password, Email, User_Type } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO "MeterUsers"."Users" ("Username", "Password", "Email", "User_Type") VALUES ($1, $2, $3, $4) RETURNING *',
        [Username, Password, Email, User_Type]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
