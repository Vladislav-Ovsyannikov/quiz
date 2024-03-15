const router = require('express').Router();

router.post('/', async (req, res) => {
  try {
    const { answer, questionid } = req.body;
    console.log(questionid);
    // const answeDb = await
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
