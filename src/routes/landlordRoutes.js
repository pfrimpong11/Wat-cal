// routes/landlordRoutes.js
const express = require('express');
const { registerLandlord, loginLandlord, forgotPasswordLandlord, resetPasswordLandlord } = require('../controllers/landlordController');
const {updateUserProfile, getUserProfile} = require('../controllers/landlordUpdate');
const {getAllReadings, getAllRooms} = require('../controllers/LandlordAnalysisController');



const router = express.Router();

router.post('/landlordSignup', registerLandlord);
router.post('/landlordLogin', loginLandlord);
router.post('/forgotPasswordLandlord', forgotPasswordLandlord);
router.post('/resetPasswordLandlord', resetPasswordLandlord);
router.post('/updateLandlord', updateUserProfile);
router.get('/profile/:username', getUserProfile);

router.get('/getAllReadings',getAllReadings);
router.get('/getAllRooms', getAllRooms);


router.get('/landlordIsAuthenticated', (req, res) => {
    if (req.session.landlord) {
        res.status(200).json({ isAuthenticated: true, landlord: req.session.landlord });
    } else {
        res.status(200).json({ isAuthenticated: false });
    }
    });

router.post('/landlordLogout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
        return res.status(500).json({ msg: 'Logout failed' });
        }
        res.status(200).json({ msg: 'Logout successful' });
    });
});

module.exports = router;
