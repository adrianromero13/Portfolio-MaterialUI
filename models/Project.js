const mongoose = require('mongoose');

const { Image } = require('./Image');

const { Schema, model } = mongoose;

const ProjectSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: 'Image',
  },
  description: {
    type: String,
    required: true,
  },
  projectURL: {
    type: String,
    unique: true,
    required: true,
  },
  herokuURL: {
    type: String,
    unique: true,
  },
});

module.exports = model('Project', ProjectSchema);
