const fs = require('fs');
const path = require('path');
// const multer = require('multer');

const { Project, Image } = require('../models');

// variables for the export function
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === 'image/jpeg' || file.mimetype === '/image/png') {
//     cb(null, true);
//   } else {
//     cb(null, false); // rejects storing a file
//   }
// };

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5
//   },
//   fileFilter: fileFilter
// });

module.exports = {
  uploadImage: async (req, res, next) => {
    const imageName = req.body.imageName;
    const imageData = req.file.path;

    try {
      const newImage = await new Image(imageName, imageData).save();
      return res.status(200).json({ success: true, document: newImage })
    } catch (error) {
      return res.status(403).json({ error: 'Oops, appears there was an error' });
    }
  }
};
