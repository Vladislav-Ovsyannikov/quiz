const React = require('react');

module.exports = function Navbar({ scores }) {
  return (
    <div className="navbar">
      <div className="select"><a href="/main">Главная</a></div>
      <div className="select"><a href="/table">Таблица результатов</a></div>
      <div className="select hidden"><a href="/signup">Регистрация</a></div>
      <div className="select hidden"><a href="/signin">Войти</a></div>
      <div className="select hidden"><a href="/logout">Выйти</a></div>
      <div className="select hidden">
        <a href="/table">
          Очки:
          {scores}
        </a>
      </div>
    </div>
  );
};
