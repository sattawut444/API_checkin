const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers')

router.post('/detail',userControllers.userDetail);
router.post('/list',userControllers.userList);
router.post('/update',userControllers.userUpdate);
router.post('/delete',userControllers.userDelete);
module.exports = router