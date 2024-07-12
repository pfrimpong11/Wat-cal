const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({
  frameType: {
    type: String,
    required: true,
    enum: ['short', 'control', 'long', 'variable'],
  },
  address: {
    type: String,
    required: true,
  },
  controlField: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  checksum: {
    type: String,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  crc: {
    type: String,
    required: false,
  }
});

const Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;
