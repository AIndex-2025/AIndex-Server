// config/mongo-db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
     try {
          await mongoose.connect(process.env.DB_URI, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
          });
          console.log('MongoDB 연결 성공');
     } catch (error) {
          console.error('MongoDB connection error:', error);
          process.exit(1); //서버 // 예외 처리 합시다.
     }
};

module.exports = { connectDB };