const router = require('express').Router();
const mainPage = require('../../components/pages/MainPage');

router.get('/', async (req, res) => {
  const html = res.renderComponent(mainPage, {
    content: 'Приветсвуем вас на квизе от "Рабочее название команды"',
    title: 'Главная',
  });
  res.send(html);
});

module.exports = router;
