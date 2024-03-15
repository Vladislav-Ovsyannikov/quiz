const router = require('express').Router();
const mainPage = require('../../components/pages/MainPage');

router.get('/', async (req, res) => {
  const {user} = res.app.locals
  const html = res.renderComponent(mainPage, {
    content: 'Приветсвуем вас на квизе от "Рабочее название команды"',
    title: 'Главная',
    user
  });
  res.send(html);
});

router.get('/logout', async (req, res) => {
  delete res.app.locals.user
  res.redirect('/');
});

module.exports = router;

