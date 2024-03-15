const router = require('express').Router();

//views
const authRouter = require('./views/auth.routes');
const topicViewRouter = require('./views/topic.router.views');
const mainRoute = require('./views/main.route');
const scoresRoute = require('./views/scores.router');

//api
const questionRouter = require('./api/question.api.router');

//router views
router.use('/', mainRoute);
router.use('/topics', topicViewRouter);
router.use('/auth', authRouter);
router.use('/scores-table', scoresRoute);

//router api
router.use('/api/question', questionRouter);

module.exports = router;
