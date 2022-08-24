const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Test', testSchema);
