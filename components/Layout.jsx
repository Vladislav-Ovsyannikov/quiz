const React = require('react');
const NavBar = require('./ui/NavBar');

module.exports = function Layout({ title, children, scores = 0 }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/reset_style.css" />
      </head>
      <body>
        <NavBar scores={scores} />
        {children}
      </body>
    </html>
  );
};
