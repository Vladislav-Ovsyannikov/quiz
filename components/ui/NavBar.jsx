const React = require('react');

module.exports = function Navbar({ scores, user }) {
  return (
    <div className='navbar'>
      <div className='select'>
        <a href='/'>Главная</a>
      </div>
      <div className='select'>
        <a href='/scores-table'>Таблица результатов</a>
      </div>
      {!user ? (
        <>
          <div className='select hidden'>
            <a href='/auth/sign-up'>Регистрация</a>
          </div>
          <div className='select hidden'>
            <a href='/auth/sign-in'>Войти</a>
          </div>
        </>
      ) : (
        <>
          <div className='select hidden'>
            <a href='/logout'>Выйти</a>
          </div>
          <div className='select hidden'>
            <a href='/scores-table'>
              Очки:
              {scores}
            </a>
          </div>
        </>
      )}
    </div>
  );
};
