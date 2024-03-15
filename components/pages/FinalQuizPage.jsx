const React = require('react');
const Layout = require('../Layout');

function FinalQuizPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='finalPage'>
        <p>Поздравляем, ваш счет: {user.scores}</p>
        <img
        className='finalimg'
          src='https://sun9-42.userapi.com/impg/a-CE02Os-mK6_3fQz3dTz-FiLcApWLmVzhPkmA/JE_5QotWht0.jpg?size=810x1080&quality=95&sign=820b9b5a6f4ffea4eee59295afac5d55&type=album'
          alt=''
        />
      </div>
    </Layout>
  );
}

module.exports = FinalQuizPage;
