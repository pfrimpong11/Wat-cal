// models/Room.js
const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
    },
    roomEmail: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Room', RoomSchema);
