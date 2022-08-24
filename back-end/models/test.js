const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  en: {
    type: String,
    required: true
  },
  ru: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Test', testSchema);
