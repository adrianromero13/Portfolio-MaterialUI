const router = require('express').Router();

const projectRoutes = require('./projectRoutes');
// set up router variables

// '/api' prepended to routes
router.use('/projects', projectRoutes)

module.exports = router;
