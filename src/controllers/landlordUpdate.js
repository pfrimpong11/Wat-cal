const Landlord = require('../models/Landlord');

exports.updateUserProfile = async (req, res) => {
    const { username, email, dateOfBirth, meterSerialNumber, houseAddress, meterType, roomsData } = req.body;
    console.log(username);
    console.log(email);

    try {
        const landlord = await Landlord.findOneAndUpdate(
            { username },
            {
                $push: { roomids: { $each: roomsData } }, // This appends the new rooms to the existing array
                email,
                dateOfBirth,
                houseAddress,
                meterSerialNumber,
                meterType,
            },
            { new: true }
        );
        

        if (!landlord) {
            return res.status(404).send('User not found');
        }

        res.send(landlord);
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

