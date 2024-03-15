const React = require('react');
const NavBar = require('./ui/NavBar');

module.exports = function Layout({ title, children, user }) {
  console.log(user);
  return (
    <html lang='en'>
      <head>
        <title>{title}</title>
        {/* <link rel='stylesheet' href='/css/reset_style.css' /> */}
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
