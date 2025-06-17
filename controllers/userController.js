const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// 회원가입
exports.signup = async (req, res) => {
     const { id, pw } = req.body;

     try {
     const existingUser = await User.findOne({ id });
     if (existingUser) {
          return res.status(400).json({ message: '이미 존재하는 ID입니다.' });
     }

     const hashedPw = await bcrypt.hash(pw, 10);
     const newUser = new User({ id, pw: hashedPw, stars: [], createdAIs: [] });
     await newUser.save();

     res.status(201).json({ message: '회원가입 성공' });
     } catch (err) {
     res.status(500).json({ message: '회원가입 실패', error: err.message });
     }
};

// 로그인
exports.login = async (req, res) => {
     const { id, pw } = req.body;

     try {
     const user = await User.findOne({ id });
     if (!user) {
          return res.status(400).json({ message: '존재하지 않는 사용자입니다.' });
     }

     const isMatch = await bcrypt.compare(pw, user.pw);
     if (!isMatch) {
          return res.status(400).json({ message: '비밀번호가 일치하지 않습니다.' });
     }

     const token = jwt.sign(
          { id: user._id, username: user.id },
          process.env.SECRET_KEY,
          { expiresIn: '1h' }
     );

     res.status(200).json({ message: '로그인 성공', token });
     } catch (err) {
     res.status(500).json({ message: '로그인 실패', error: err.message });
     }
};
