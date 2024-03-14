const router = require('express').Router();
const SignUpPage = require('../../components/pages/SignUpPage');
const SignInPage = require('../../components/pages/SignInPage');

router.get('/sign-in', (req, res) => {
  const html = res.renderComponent(SignInPage, { title: 'sign-in' });
  res.send(html);
});

router.get('/sign-up', (req, res) => {
  const html = res.renderComponent(SignUpPage, { title: 'sign-up' });
  res.send(html);
});

module.exports = router;
