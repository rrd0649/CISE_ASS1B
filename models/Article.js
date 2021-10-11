const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String
  },
  authors: {
    type: String,
  },
  published_year: {
    type: Number,
  },
  source: {
    type: String,
  },
  doi: {
    type: String,
  },
  SE_method: {
    type: String
  },
  evidence: {
    type: String,
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