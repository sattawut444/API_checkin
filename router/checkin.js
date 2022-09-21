const express = require('express');
const router = express.Router();
const checkinController = require('../controllers/checkinController')

router.post('/checkin',checkinController.UserCheckIn);
router.post('/checkout',checkinController.UserCheckout);
router.post('/search',checkinController.CheckInSearch);
router.post('/list',checkinController.ListCheckIn);
module.exports = router