const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController')

router.post('/user',loginController.Userlogin);
router.post('/admin',loginController.Adminlogin);
router.post('/loginemail',loginController.loginEmail);
router.post('/logout',loginController.LogOutUser);
module.exports = router