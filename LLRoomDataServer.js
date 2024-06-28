const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB schema and model
const RoomSchema = new mongoose.Schema({
    roomName: String,
    readingValue: Number
});
const Room = mongoose.model('Room', RoomSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/electricity', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/readings', async (req, res) => {
    try {
        const rooms = await Room.find();
        res.json(rooms);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
