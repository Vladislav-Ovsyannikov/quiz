const router = require('express').Router();
const scoresPage = require('../../components/pages/ScoresPages');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    const html = res.renderComponent(scoresPage, {
      title: 'Лучшие результаты',
      users,
    });
    res.send(html);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
