const fs = require('fs');
const path = require('path');

const { Project, Image } = require('../models');

module.exports = {
  getProjects: async (req, res) => {
    try {
      const projects = await Project.find();
      return res.status(200).json(projects);
    } catch (error) {
      return res.status(403).json({ error });
    }
  },

  uploadImage: async (req, res, next) => {
    try {
    const obj = {
      name: req.body.name,
      description: req.body.description,
      img: {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/png'
      }
    }
      const newImage = await Image.create(obj);
      return res.redirect('/')
    } catch (error) {
      
    }
  }
};
