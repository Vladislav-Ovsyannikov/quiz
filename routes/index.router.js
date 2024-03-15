const router = require('express').Router();

//views
const authRouter = require('./views/auth.routes');
const topicViewRouter = require('./views/topic.router.views');
const apiAuthRouter = require('./api/api.auth.routes');

const mainRoute = require('./views/main.route');
const scoresRoute = require('./views/scores.router');
const finalViewRouter = require('./views/finalPage.router');

//api
const questionRouter = require('./api/question.api.router');

//router views
router.use('/', mainRoute);
router.use('/topics', topicViewRouter);
router.use('/auth', authRouter);
router.use('/scores-table', scoresRoute);
router.use('/finalQuize', finalViewRouter);

//router api
router.use('/api/question', questionRouter);

router.use('/api/auth', apiAuthRouter);

module.exports = router;
