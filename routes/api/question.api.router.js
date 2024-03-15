const router = require('express').Router();
const { Questions } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { answer, questionid } = req.body;
    const answeDb = await Questions.findOne({ where: { id: questionid } });
    if (answer === answeDb.answer) {
      res.status(200).json({ message: 'success' });
      res.app.locals.score += 10;
    } else {
      res.status(200).json({ message: 'bad' });
      res.app.locals.score += 0;
    }
    console.log(res.app.locals.score);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
