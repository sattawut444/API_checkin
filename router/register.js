const express = require('express');
const router = express.Router();
const registerControllers = require('../controllers/registerControllers')

router.post('/user',registerControllers.registerUser); // register User
router.post('/admin',registerControllers.registerAdmin); // register Admin
module.exports = router