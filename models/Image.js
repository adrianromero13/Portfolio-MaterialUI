const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const ImageSchema = new Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
   dateCreated: {
     type: Date,
     default: Date.now(),
   },
});

module.exports = model('Image', ImageSchema);
