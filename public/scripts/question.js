const formAnswer = document.querySelector('.formAnswer');

if (formAnswer) {
  formAnswer.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { answer } = event.target;
    const id = event.target.dataset.questionid;
    const data = {
      answer: answer.value,
      questionid: id
    };
    const responce = await fetch('/api/question', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
  });
}
