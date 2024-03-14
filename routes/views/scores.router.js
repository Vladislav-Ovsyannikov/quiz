const router = require('express').Router();
const scoresPage = require('../../components/pages/ScoresPages');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    // console.log(users);
    const html = res.renderComponent(scoresPage, {
      title: 'Лучшие результаты',
      content: { users },
    });
    res.send(html);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
