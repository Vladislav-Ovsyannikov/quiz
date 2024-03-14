const router = require('express').Router();

const authRouter = require('./views/auth.routes');
const topicViewRouter = require('./views/topic.router.views');
const mainRoute = require('../routes/views/main.route');

router.use('/topics', topicViewRouter);
router.use('/auth', authRouter);
router.use('/main', mainRoute);

module.exports = router;
