const React = require('react');
const Layout = require('../Layout');

function SignInPage() {
  return (
    <Layout>
      <div className='container'>
        <form className='sign-in'>
          <input
            name='name'
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Имя моё любимое'
          />
          <input
            name='password'
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Парольчик'
          />
          <button type='submit' className='btn btn-primary'>
            Авторизироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignInPage;
