const React = require('react');
const Layout = require('../Layout');

module.exports = function MainPage({ title, content, user }) {
  return (
    <Layout title={title} user={user}>
      <div className='mainConteiner'>
        <h1 className='text'>{content}</h1>
        <div className='img'>
          <img
            src='https://steamuserimages-a.akamaihd.net/ugc/1853790286826312372/C6EB8750EC4676539B19A2B4B65D76C0DF24FC23/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'
            alt='Очень милая картинка'
          />
        </div>
        {user ? (
          <a className='btnStart' href='/topics'>
            Начать квиз
          </a>
        ) : (
          <a className='btnReg' href='/auth/sign-up'>Зарегистрируйся!!!!</a>
        )}
      </div>
    </Layout>
  );
};
