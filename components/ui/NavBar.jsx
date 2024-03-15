const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <nav>
      <div className='nav-wrapper'>
        <div id='nav-mobile'>
          <a href='/' className='logo'>
            YOO!
          </a>
          {user ? (
            <>
              <div className='navbar-user'>
                <div className='userName'>Привет, {user.name}!</div>
                <a href='/scores-table'>Результаты</a>
                <a href='/logout'>Выйти</a>
                <a href='/scores-table'>
                  Очки:
                  {user.scores}
                </a>
              </div>
              {/* <div className='select hidden'> */}

              {/* </div> */}
              {/* <div className='select hidden'> */}

              {/* </div> */}
            </>
          ) : (
            <div className='navbar-reg'>
              <div className='select hidden'>
                <a href='/auth/sign-up'>Регистрация</a>
              </div>
              <div className='select hidden'>
                <a href='/auth/sign-in'>Войти</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
