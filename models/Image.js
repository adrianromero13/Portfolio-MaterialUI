const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ImageSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  img: {
    dtat: Buffer,
    contentType: String,
  }
});

module.exports = model('Image', ImageSchema);
