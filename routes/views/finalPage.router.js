const router = require('express').Router();
const FinalQuizPage = require('../../components/pages/FinalQuizPage');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const {user, scores} = res.app.locals
    const userInDb = await User.findOne({where:{id: user.id}})
    res.send(res.renderComponent(FinalQuizPage, { title: 'Результат', user: userInDb, scores }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
