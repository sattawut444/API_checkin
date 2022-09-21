const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController')

router.post('/list',historyController.ListLoginTime);
router.post('/logtime',historyController.LogUserTime);
module.exports = router