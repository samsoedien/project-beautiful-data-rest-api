const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HeartSchema = new Schema({
  bpm: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Heart = mongoose.model('Heart', HeartSchema);