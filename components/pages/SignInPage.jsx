const React = require('react');
const Layout = require('../Layout');

function SignInPage() {
  return (
    <Layout>
      <div className="container">
        <form className="sign-in">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Имя любимое моё
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Парольчик
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          <button type="submit" className="btn btn-primary">
            Авторизироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignInPage;
