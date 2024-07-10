const Room = require('../models/Room');
const Landlord = require('../models/Landlord');

exports.updateElectricityStatus = async (req, res) => {
  const { roomIds, disconnect } = req.body;
  try {
    const room = await Room.findOneAndUpdate(
      { _id: roomIds },
      { electricityStatus: !disconnect },
      { new: true }
    );

    if (!room) {
      return res.status(404).json({ message: 'Room not found' });
    }

    // Code to communicate with the relay hardware
    await toggleRelay(roomIds, disconnect);

    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: 'Error updating electricity status', error });
  }
};

const toggleRelay = async (roomIds, disconnect) => {
  // This is where you would add the code to control the relay hardware.
  // For example, if you're using a GPIO library or sending a request to another service
  // that controls the relay.
  // For demonstration purposes, we'll just log the action.
  console.log(`Toggling relay for room ${roomIds}: ${disconnect ? 'OFF' : 'ON'}`);

  // Example using a GPIO library like onoff
  const Gpio = require('onoff').Gpio;
  const relay = new Gpio(roomIds, 'out');

  // Set relay state
  relay.writeSync(disconnect ? 0 : 1);
};

