const mongoose = require('mongoose');

const constructionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: true,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model('Construction-company', constructionSchema);
