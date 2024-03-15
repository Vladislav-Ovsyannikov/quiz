const React = require('react');
const Layout = require('../Layout');

function FinalQuizPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='finalPage'>
        <p>Поздравляем, ваш счет: {user.scores}</p>
      </div>
    </Layout>
  );
}

module.exports = FinalQuizPage;
