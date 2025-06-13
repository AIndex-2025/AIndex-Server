const express = require('express'); // Express 라이브러리 import
const app = express(); // Express 앱 인스턴스 생성

// 기본 라우팅 설정
app.get('/', (req, res) => {
  res.send('Hello, World!'); // '/' 경로에 대한 응답
});

// 서버 시작 설정
const port = 3000; // 서버 포트 지정
app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행 중입니다.`); // 서버가 실행 중임을 확인
});