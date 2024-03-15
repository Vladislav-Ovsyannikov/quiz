const router = require('express').Router();

const authRouter = require('./views/auth.routes');
const topicViewRouter = require('./views/topic.router.views');

const mainRoute = require('./views/main.route');
const scoresRoute = require('./views/scores.router');

router.use('/', mainRoute);
router.use('/topics', topicViewRouter);
router.use('/auth', authRouter);

router.use('/scores-table', scoresRoute);

module.exports = router;
