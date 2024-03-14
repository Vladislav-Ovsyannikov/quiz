const React = require('react');
const Layout = require('../Layout');
const {User} - require('../../db/models')

module.exports = function MainPage({ title, content }) {
    const users = User.findAll()
    console.log(users);
  return (
    <Layout title={title}>
      <h2>{title}</h2>
      <div className='text'>{content}</div>
      {/* {User.map((el) => (
        <div key={el.id}>
            <div>{el.name}</div>
            <div>{el.scores}</div>
        </div>
      ) */}
        
      )}
      
    </Layout>
  );
};
