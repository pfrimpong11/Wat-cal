// models/Landlord.js
const mongoose = require('mongoose');

const LandlordSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    houseAddress: {
        type: String,
    },
    meterSerialNumber: {
        type: String,
    },
    meterType: {
        type: String,
    }
});

// const Landlord = mongoose.model('Landlord', LandlordSchema);

module.exports = mongoose.model('Landlord', LandlordSchema);
