// models/Tenant.js
const mongoose = require('mongoose');

const TenantSchema = new mongoose.Schema({
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

// const Tenant = mongoose.model('Tenant', TenantSchema);

module.exports = mongoose.model('Tenant', TenantSchema);
