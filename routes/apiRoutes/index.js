const router = require('express').Router();
const express = require('express')

const projectRoutes = require('./projectRoutes');
const uploadRoutes = require('./uploadRoutes');
// set up router variables

// '/api' prepended to routes
router.use('/projects', projectRoutes)

// set up parameters for uploads


router.use('/uploads', express.static('uploads'), uploadRoutes);

module.exports = router;
