var router = require('express').Router();

// api router will mount other routers
// for all our resources
router.use('/users', require('./user/userRoutes'));
router.use('/paths', require('./path/pathRoutes'));


module.exports = router;