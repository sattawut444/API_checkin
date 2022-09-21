const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')

router.post('/detail',adminController.adminDetail);
router.post('/list',adminController.adminList);
router.post('/update',adminController.adminUpdate);
router.post('/delete',adminController.adminDelete);
module.exports = router