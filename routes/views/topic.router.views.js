const router = require('express').Router();
const { Topics, Questions, User } = require('../../db/models');
const PageQuizTopics = require('../../components/pages/PageQuizTopics');
const PageQuestion = require('../../components/pages/PageQuestion');

router.get('/', async (req, res) => {
  try {
    const { user } = res.app.locals;
   
    const userInDb = await User.findOne({where: {id: user.id}})
    const quizzes = await Topics.findAll();
    res.send(res.renderComponent(PageQuizTopics, { quizzes, user: userInDb }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/:id/question', async (req, res) => {
  const { user } = res.app.locals;
  try {
    const { id } = req.params;
    const userInDb = await User.findOne({where: {id: user.id}})
    const question = await Questions.findOne({ where: { topic_id: id } });
    res.send(res.renderComponent(PageQuestion, { question, user: userInDb }));
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/:id/question/:questId', async (req, res) => {
  try {
    const { user } = res.app.locals;
    const { id, questId } = req.params;
    const userInDb = await User.findOne({where: {id: user.id}})
    const question = await Questions.findOne({
      where: { topic_id: id, id: questId },
    });
    res.app.locals.user = userInDb
    res.send(res.renderComponent(PageQuestion, { question }));
  } catch ({ message }) {
    res.redirect('/finalQuize');
  }
});

module.exports = router;
