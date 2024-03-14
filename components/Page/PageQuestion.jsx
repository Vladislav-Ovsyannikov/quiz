const React = require('react');
const Layout = require('../Layout');

function PageQuestion({ question, topic }) {
  return (
    <Layout>
      <div className='question'>
        <p>{question.question}</p>
        <form className='answerForm' action='/api/question' method='post'>
          <input type='text' name='answers' placeholder='answer' required />
          <button className='OKbut' type='submit'>
            Ответить
          </button>
        </form>
        <a
          className='next'
          href={`/topics/${question.topic_id}/question/${question.id + 1}`}
        >
          Далее
        </a>
      </div>
    </Layout>
  );
}

module.exports = PageQuestion;
