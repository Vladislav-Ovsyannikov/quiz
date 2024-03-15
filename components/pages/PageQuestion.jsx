const React = require('react');
const Layout = require('../Layout');
const FormAnswer = require('../ui/FormAnswer');

function PageQuestion({ question, user }) {
  return (
    <Layout user={user}>
      <div className='question'>
        <p>{question.question}</p>
        <FormAnswer question={question} />
        <div className='messageResponse' />
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
