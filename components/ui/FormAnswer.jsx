const React = require('react');

function FormAnswer({ question }) {
  return (
    <form
      className='formAnswer'
      action='/api/question'
      data-questionid={question.id}
      method='post'
    >
      <input type='text' name='answer' placeholder='answer' required />
      <button className='OKbut' type='submit'>
        Ответить
      </button>
    </form>
  );
}

module.exports = FormAnswer;
