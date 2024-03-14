const React = require('react');
const Layout = require('../Layout');

module.exports = function ScoresPage({ title, content }) {
  // console.log(content);
  return (
    <Layout title={title}>
      <h2>{title}</h2>
      {content.map((el, index) => (
        <div>
          <div>{index}</div>
          <div>{el.name}</div>
          {/* <div>{el.scores}</div> */}
        </div>
      ))}
    </Layout>
  );
};
