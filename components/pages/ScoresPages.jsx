const React = require('react');
const Layout = require('../Layout');

module.exports = function ScoresPage({ title, users }) {
  return (
    <Layout title={title}>
      <h2>{title}</h2>
      {users.map((el, index) => (
        <div>
          <div>{index + 1}</div>
          <div>{el.name}</div>
          <div>{el.scores}</div>
        </div>
      ))}
    </Layout>
  );
};
