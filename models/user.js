const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: false
    },
    title2: {
      type: String,
      required: false
    },
    title3: {
      type: String,
      required: false
    },

    description: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: false
    },
    description2: {
      type: String,
      required: false
    },
    description3: {
      type: String,
      required: false
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);