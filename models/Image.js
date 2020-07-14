const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ImageSchema = new Schema({
  name: {
    type: String,
    default: 'none',
    unique: true,
    required: true,
  },
  description: {
    type: String,
  },
  imageData: {
    type: String,
    required: true,
  }
});

module.exports = model('Image', ImageSchema);
