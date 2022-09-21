const express = require('express');
const router = express.Router();
const resetController = require('../controllers/resetController')

router.post('/user',resetController.PasswordResetUser); // resetpassword User
router.post('/admin',resetController.PasswordResetAdmin); // resetpassword Admin
router.post('/supperadmin',resetController.PasswordResetSupperAdmin); // resetpassword SupperAdmin
module.exports = router