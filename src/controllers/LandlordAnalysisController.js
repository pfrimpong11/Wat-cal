const Reading = require('../models/Reading');
const Room = require('../models/Room');

exports.getAllReadings = async (req, res) => {
    try {
        const readings = await Reading.find().populate('room'); // Populate room details
        res.status(200).json(readings);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};