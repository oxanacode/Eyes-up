const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  complexity: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Lesson', lessonSchema);