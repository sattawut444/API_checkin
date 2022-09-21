const express = require('express');
const router = express.Router();
const supperadminController = require('../controllers/supperadminController')

router.post('/update',supperadminController.SupperAdminUpdate); 

module.exports = router