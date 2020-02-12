const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const HappeningRnowSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: 'You must supply an author!'
  },
  text: {
    type: String,
    required: 'Your comment must have a text!'
  },
  rating: {
    min: 1,
    max: 5
  }
})

module.exports = mongoose.model('HappeningRnow', HappeningRnowSchema);
