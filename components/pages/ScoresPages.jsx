const React = require('react');
const Layout = require('../Layout');

module.exports = function ScoresPage({ title, users, user }) {
  return (
    <Layout title={title} user={user}>
      <h2>{title}</h2>
      {users.toSorted((a,b) => b.scores - a.scores).map((el, index) => (
        <div className='flex' style={{display: 'flex', justifyContent: 'center'}}>
          <div className='nameScore' style={{margin: 2}}>{index + 1}</div>
          <div className='nameScore'>{el.name}</div>
          <div className='scoreScore'>{el.scores}</div>
        </div>
      ))}
    </Layout>
  );
};
