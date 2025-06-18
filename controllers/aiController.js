const InformationAI = require('../models/InformationAI');

exports.addAI = async (req, res) => {
     try {
          const {
               name,
               company,
               url,
               category,
               languages,
               promptExample,
               explanation
     } = req.body;

     const newAI = new InformationAI({
          name,
          company,
          url,
          category,
          language: languages,
          example: promptExample,
          explain: explanation,
          img: req.file ? req.file.buffer.toString('base64') : null, // base64로 이미지 저장 (간단하게 처리)
          createdBy: "" // 로그인 연동하고 수정
     });

     await newAI.save();
     res.status(201).json({ message: 'AI 정보 저장 완료' });
     } catch (err) {
     res.status(500).json({ message: '서버 에러', error: err.message });
     }
};
