require('dotenv').config(); 
const express = require('express');
const connectDB = require("./config/db")
const signupRouter = require('./routes/signup');  // routes/signup 불러오기
const loginRouter = require('./routes/login');
const aiRouter = require('./routes/ai');  
const cors = require('cors');

const app = express(); 
connectDB();


//Mongo 연결

//미들웨어, 라우터 설정 추가
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/ai', aiRouter);

/// 미들웨어 ㅅㅈ
app.use(cors());
app.use(express.json());


// 경로 응답
app.get('/', (req, res) => {
  res.send("connected!!!!!!!");
});


// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
  console.log('server running on' + PORT)
})
