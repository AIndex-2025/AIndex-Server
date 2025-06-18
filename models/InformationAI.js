const mongoose = require('mongoose');

const aiSchema = new mongoose.Schema({
     name: String,
     company: String,
     url: String,
     category: String,
     language: String,
     example: String,
     explain: String,
     img: String,
     createdBy: String
});

module.exports = mongoose.model('InformationAI', aiSchema);
