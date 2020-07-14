const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');


const { uploadImage } = require('../../../controllers/imageController');

// variables for multer middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === '/image/png') {
    cb(null, true);
  } else {
    cb(null, false); // rejects storing a file
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.route('/upload')
  .put(upload.single('imageData'), uploadImage)


module.exports = router;
