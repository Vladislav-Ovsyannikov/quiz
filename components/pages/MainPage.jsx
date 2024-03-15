const React = require('react');
const Layout = require('../Layout');

module.exports = function MainPage({ title, content, user }) {
  return (
    <Layout title={title} user={user}>
      <h2>{title}</h2>
      <div className='img'>
        <img src='' alt='Очень милая картинка' />
      </div>
      <div className='text'>{content}</div>
      <a className='btn' href='/topics'>
        Начать квиз
      </a>
    </Layout>
  );
};
