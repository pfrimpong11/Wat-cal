// controllers/tenantController.js
const bcrypt = require('bcryptjs');
const Tenant = require('../models/Tenant');

exports.registerTenant = async (req, res) => {
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
        let tenant = await Tenant.findOne({ username });
        if (tenant) {
            return res.status(400).json({ errors: [{ msg: 'Username already exists' }] });
        }

        tenant = await Tenant.findOne({ email });
        if (tenant) {
            return res.status(400).json({ errors: [{ msg: 'Email already exists' }] });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save tenant to database
        tenant = new Tenant({
            username,
            email,
            password: hashedPassword,
            dateOfBirth,
            houseAddress,
            meterSerialNumber,
            meterType
        });

        await tenant.save();

        res.status(201).json({ msg: 'Tenant registered successfully' });
        console.log("Tenant registered successfully");
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};



exports.loginTenant = async (req, res) => {
    const { username, password } = req.body;

    try {
        let tenant = await Tenant.findOne({ username });

        if (!tenant) {
        return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, tenant.password);

        if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
        }

        req.session.tenant = tenant; // Save tenant in session
        res.status(200).json({ msg: 'Login successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
