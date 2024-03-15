const router = require('express').Router();
const FinalQuizPage = require('../../components/pages/FinalQuizPage');
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const { user } = res.app.locals;
    const userA = await User.findOne({ where: { id: user.id } });
    res.send(res.renderComponent(FinalQuizPage, { title: 'Результат', userA }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
