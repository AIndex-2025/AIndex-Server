const express = require('express');
const router = express.Router();
const multer = require('multer');
const { addAI } = require('../controllers/aiController');

// 이미지 업로드8888 처리 (임시 로컬 저장)
const storage = multer.memoryStorage(); // 메모리에 올림
const upload = multer({ storage });

router.post('/add', upload.single('file'), addAI);

module.exports = router;
