const React = require('react');
const Layout = require('../Layout');

module.exports = function MainPage({ title, content }) {
  return (
    <Layout title={title}>
      <h2>{title}</h2>
      <div className="img"><img src="" alt="Очень милая картинка" /></div>
      <div className="text">{content}</div>
      <a className="btn">Начать квиз</a>
    </Layout>
  );
};
