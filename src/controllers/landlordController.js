// controllers/landlordController.js
const bcrypt = require('bcryptjs');
const Landlord = require('../models/Landlord');

exports.registerLandlord = async (req, res) => {
    const {
        username,
        email,
        password,
        dateOfBirth,
        houseAddress,
        meterSerialNumber,
        meterType
    } = req.body;

    try {
        // Check if username or email already exists
        let landlord = await Landlord.findOne({ username });
        if (landlord) {
            return res.status(400).json({ errors: [{ msg: 'Username already exists' }] });
        }

        landlord = await Landlord.findOne({ email });
        if (landlord) {
            return res.status(400).json({ errors: [{ msg: 'Email already exists' }] });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save landlord to database
        landlord = new Landlord({
            username,
            email,
            password: hashedPassword,
            dateOfBirth,
            houseAddress,
            meterSerialNumber,
            meterType
        });

        await landlord.save();

        res.status(201).json({ msg: 'Landlord registered successfully' });
        console.log("Landlord registered successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};



exports.loginLandlord = async (req, res) => {
    const { username, password } = req.body;

    try {
        let landlord = await Landlord.findOne({ username });

        if (!landlord) {
        return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, landlord.password);

        if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
        }

        req.session.landlord = landlord; // Save landlord in session
        res.status(200).json({ msg: 'Login successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
