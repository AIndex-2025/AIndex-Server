const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  pw: { type: String, required: true },
  stars: [mongoose.Types.ObjectId],
  createdAIs: [mongoose.Types.ObjectId]
});

module.exports = mongoose.model('User', userSchema);
