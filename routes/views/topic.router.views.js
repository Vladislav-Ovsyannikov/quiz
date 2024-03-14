const router = require('express').Router();
const { Topics } = require('../../db/models');
const PageQuizTopics = require('../../components/pages/PageQuizTopics');

router.get('/', async (req, res) => {
  try {
    // const { user } = res.app.locals;
    const quizzes = await Topics.findAll();
    res.send(res.renderComponent(PageQuizTopics, { quizzes }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
