const router = require('express').Router();


const authRouter = require('./views/auth.routes');

router.use('/auth',authRouter);

module.exports = router;
