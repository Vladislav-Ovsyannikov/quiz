// const router = require('express').Router();
// const { Questions } = require('../../db/models');
// const PageQuestion = require('../../components/Page/PageQuestion');

// router.get('/:id/question', async (req, res) => {
//   try {
//     const { id } = req.body;
//     const question = await Questions.findOne({ where: { topic_id: id } });
//     res.send(res.renderComponent(PageQuestion, {question}));
//   } catch ({ message }) {
//     res.status(500).json({ error: message });
//   }
// });

// module.exports = router;
