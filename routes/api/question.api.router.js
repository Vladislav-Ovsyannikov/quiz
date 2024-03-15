const router = require('express').Router();
const { Questions, User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { answer, questionid } = req.body;
    const answeDb = await Questions.findOne({ where: { id: questionid } });
    if (answer === answeDb.answer) {
      res.status(200).json({ message: 'success' });
      res.app.locals.scores += 10;
      const scores = await User.update({scores: res.app.locals.scores}, {
        where: {id: res.app.locals.user.id}
      })
      // console.log(res.app.locals.scores, 'res.app.locals.score');
      // console.log(res.app.locals.user.id, 'res.app.locals.user.id');
      // console.log(scores, 'scores - await');
    } else {
      res.status(200).json({ message: 'bad' });
      res.app.locals.scores += 0;
    }
    console.log(res.app.locals.scores);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
