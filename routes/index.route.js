const router = require('express').Router();

const mainRoute = require('../routes/views/main.route')

router.use('/main', mainRoute)

module.exports = router;
