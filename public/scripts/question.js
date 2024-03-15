const formAnswer = document.querySelector('.formAnswer');

if (formAnswer) {
  formAnswer.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { answer } = event.target;
    const id = event.target.dataset.questionid;
    const data = {
      answer: answer.value,
      questionid: id,
    };
    const responce = await fetch('/api/question', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    const res = await responce.json();
    const messageResponse = document.querySelector('.messageResponse');
    if (res.message === 'success') {
      formAnswer.reset();
      messageResponse.innerHTML = 'О ДААААА!';
    } else {
      formAnswer.reset();
      messageResponse.innerHTML = 'О НЕЕЕЕЕЕТ!';
    }
  });
}
