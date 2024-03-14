const router = require('express').Router();
const { Topics, Questions } = require('../../db/models');
const PageQuizTopics = require('../../components/Page/PageQuizTopics');
const PageQuestion = require('../../components/Page/PageQuestion');

router.get('/', async (req, res) => {
  try {
    // const { user } = res.app.locals;
    const quizzes = await Topics.findAll();
    res.send(res.renderComponent(PageQuizTopics, { quizzes }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/:id/question', async (req, res) => {
  try {
    const { id } = req.params;
    const question = await Questions.findOne({ where: { topic_id: id } });
    res.send(res.renderComponent(PageQuestion, { question }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
