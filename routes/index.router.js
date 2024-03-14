const router = require('express').Router();
//view
const topicViewRouter = require('./views/topic.router.views');

//router view
router.use('/topics', topicViewRouter);

module.exports = router;
