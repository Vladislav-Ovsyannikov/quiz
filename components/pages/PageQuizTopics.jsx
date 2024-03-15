const React = require('react');
const Layout = require('../Layout');

function PageQuizTopic({ quizzes, user }) {
  return (
    <Layout user={user}>
      <div className='container__topics'>
        {quizzes.map((quiz) => (
          <div>
            <a href={`/topics/${quiz.id}/question`}>{quiz.title}</a>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = PageQuizTopic;
