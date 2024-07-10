const Tenant = require('../models/Tenant');

exports.updateUserProfile = async (req, res) => {
    const { username, email, dateOfBirth, meterSerialNumber, houseAddress, meterType, roomsData } = req.body;
    console.log(username);
    console.log(email);

    try {
        const tenant = await Tenant.findOneAndUpdate(
            { username },
            {
                email,
                dateOfBirth,
                meterSerialNumber,
                houseAddress,
                meterType,
            },
            { new: true }
        );
        

        if (!tenant) {
            return res.status(404).send('User not found');
        }

        res.send(tenant);
        console.log("User update successful");
    } catch (error) {
        res.status(500).send('Server error');
    }
    };

exports.getUserProfile = async (req, res) => {
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
};

