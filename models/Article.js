const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  titles: {
    type: String
  },
  author: {
    type: String,
  },
  published_date: {
    type: String,
  },
  credibity_rating: {
    type: Number,
  },
  SE_method: {
    type: String
  },
  claims: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Article = mongoose.model('article', ArticleSchema);