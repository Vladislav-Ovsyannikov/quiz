const router = require('express').Router();


const authRouter = require('./views/auth.routes');
const topicViewRouter = require('./views/topic.router.views');

router.use('/topics', topicViewRouter);
router.use('/auth',authRouter);

module.exports = router;


