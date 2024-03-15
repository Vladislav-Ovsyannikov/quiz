const router = require('express').Router();
const { Questions, User } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { answer, questionid } = req.body;
    const answeDb = await Questions.findOne({ where: { id: questionid } });
    if (answer === answeDb.answer) {
      res.app.locals.user.scores += 10;
      await User.update({scores: res.app.locals.user.scores}, {
        where: {id: res.app.locals.user.id}
      })
      return res.status(200).json({ message: 'success' });
    } 
      return res.status(200).json({ message: 'bad' });
    
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
