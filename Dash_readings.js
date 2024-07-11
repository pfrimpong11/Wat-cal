// for the LL dash
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

app.get('/user/:username', async (req, res) => {
  const username = req.params.username;

  try {
    await client.connect();
    const database = client.db('your_database_name');
    const collection = database.collection('your_collection_name');
    
    const user = await collection.findOne({ username: username });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// create env using the line below 
//MONGO_URI=your_mongo_connection_string




//// for the tenant dash
/* const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true });

const kWhSchema = new mongoose.Schema({
    username: String,
    kwh: Number
});

const kWh = mongoose.model('kWh', kWhSchema);

app.get('/get-kwh/:username', async (req, res) => {
    try {
        const userKwh = await kWh.findOne({ username: req.params.username });
        res.json(userKwh);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 */