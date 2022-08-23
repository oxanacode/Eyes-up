const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  layout: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  complexity: {
    type: String,
    required: true
  },
  minAccuracy: {
    type: Number,
    required: true
  },
  minSpeed: {
    type: Number,
    required: true
  },
  starSpeed: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Lesson', lessonSchema);