const express = require('express');
const router = express.Router();
const userInfo = require('../controllers/userController');

router.post('/', userInfo.signup); 
//추후 기능 추가 대비

module.exports = router;