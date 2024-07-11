const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/watcal', {   //put database here
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    email: String,
    dateOfBirth: String,
    meterSerialNumber: String,
    houseAddress: String,
    phoneNumber: String,
    meterType: String,
    optional: String,
    prepaidPostpaid: String,
    rooms: [String], // Define rooms as an array of strings
});

const User = mongoose.model('User', userSchema);

app.put('/update-profile', async (req, res) => {
    const { username, email, dateOfBirth, meterSerialNumber, houseAddress, phoneNumber, meterType, optional, prepaidPostpaid, rooms } = req.body;

    try {
        const user = await User.findOneAndUpdate(
            { username },
            {
                email,
                dateOfBirth,
                meterSerialNumber,
                houseAddress,
                phoneNumber,
                meterType,
                optional,
                prepaidPostpaid,
                rooms,
            },
            { new: true }
        );

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.send(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

app.get('/profile/:username', async (req, res) => {
    const username = req.params.username;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).send('User not found');
        }

        res.send(user);
    } catch (error) {
        res.status(500).send('Server error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
