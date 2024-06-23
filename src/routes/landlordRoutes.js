// routes/landlordRoutes.js
const express = require('express');
const { registerLandlord, loginLandlord } = require('../controllers/landlordController');

const router = express.Router();

router.post('/landlordSignup', registerLandlord);
router.post('/landlordLogin', loginLandlord);

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
