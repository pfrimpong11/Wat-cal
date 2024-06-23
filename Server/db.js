// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Project_04',
  password: 'ean',
  port: 5432, // Change if your PostgreSQL uses a different port
});

module.exports = pool;
