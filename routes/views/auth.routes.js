const SignUpPage = require('../../components/SignUpPage');
const SignInPage = require('../../components/SignInPage');

const router = require('express').Router();

router.get('/sing-in', (req, res) => {
    const html = res.renderComponent(SignInPage, {title: 'sign-in'});
    res.send(html);
})

router.get('/sing-up', (req, res) => {
    const html = res.renderComponent(SignUpPage, {title: 'sign-up'});
    res.send(html);
})

module.exports = router;
