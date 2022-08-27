const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: Number,
    required: true
  },
  testing: {
    type: String,
    required: true
  },
  lessonsEn: {
    type: String,
    required: true
  },
  lessonsRu: {
    type: String,
    required: true
  },
  typingAdventure: {
    type: String,
    required: true
  },
  typingHero: {
    type: String,
    required: true
  },
  badges: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);