const React = require('react');
const Layout = require('../Layout');

function SignUpPage() {
  return (
    <Layout>
      <div className="container">
        <form className="sign-up">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <label htmlFor="exampleInputPassword1" className="form-label">
              Пароль
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <label htmlFor="exampleInputEmail2" className="form-label">
              Почта
            </label>
            <input
              name="email"
              type="text"
              className="form-control"
              id="exampleInputEmail2"
            />
          <button type="submit" className="btn btn-primary">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = SignUpPage;
