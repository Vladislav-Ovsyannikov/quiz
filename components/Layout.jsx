const React = require('react');
const NavBar = require('./ui/NavBar');

module.exports = function Layout({ title, children, user }) {
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        <link rel='stylesheet' href='/styles/reset_style.css' />
        <link rel='stylesheet' href='/styles/Navbar.css' />
        <link rel='stylesheet' href='/styles/Auotirization.css' />
        <link rel='stylesheet' href='/styles/MainPage.css' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap'
          rel='stylesheet'
        />
        <script defer src='/scripts/auth.js' />
        <script defer src='/scripts/question.js' />
      </head>
      <body>
        <NavBar user={user} />
        {children}
      </body>
    </html>
  );
};
