const express = require('express');
const router = express.Router();
const otpControllers = require('../controllers/otpControllers')

router.post('/otpid',otpControllers.otpId);
router.post('/otpiduser',otpControllers.otpIduser);

module.exports = router