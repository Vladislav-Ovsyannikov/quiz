const React = require('react');
const Layout = require('../Layout');

function SignUpPage() {
  return (
    <Layout>
      <div className='container'>
        <form className='sign-up'>
          <input
            name='name'
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Имя'
          />
          <input
            name='password'
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Твой парольчик'
          />
          <input
            name='email'
            type='text'
            className='form-control'
            id='exampleInputEmail2'
            placeholder='email'
          />
          <button type='submit' className='btn btn-primary'>
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignUpPage;
