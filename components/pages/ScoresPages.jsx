const React = require('react');
const Layout = require('../Layout');

module.exports = function ScoresPage({ title, users }) {
  return (
    <Layout title={title}>
      <h2>{title}</h2>
      {users.toSorted((a,b) => b.scores - a.scores).map((el, index) => (
        <div className='flex' style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{margin: 2}}>{index + 1}</div>
          <div>{el.name}</div>
          <div>{el.scores}</div>
        </div>
      ))}
    </Layout>
  );
};
