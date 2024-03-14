const router = require('express').Router();


const authRouter = require('./views/auth.routes');
const topicViewRouter = require('./views/topic.router.views');
const apiAuthRouter = require('./api/api.auth.routes');

router.use('/topics', topicViewRouter);
router.use('/auth',authRouter);

router.use('/api/auth', apiAuthRouter);

module.exports = router;


