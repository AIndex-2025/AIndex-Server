const express = require('express');
const router = express.Router();
const userInfo = require('../controllers/userController');

router.post('/', userInfo.login);

module.exports = router;