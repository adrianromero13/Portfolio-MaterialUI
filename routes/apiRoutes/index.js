const router = require('express').Router();

const projectRoutes = require('./projectRoutes');
// set up router variables

// '/api' prepended to routes
router.use('/projects', projectRoutes)

// set up parameters for uploads

module.exports = router;
