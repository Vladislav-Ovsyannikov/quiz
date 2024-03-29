require('@babel/register');
const path = require('path');
const express = require('express');

const app = express();
const indexRouter = require('./routes/index.router');

const ssr = require('./middleware/ssr');

const PORT = process.env.PORT ?? 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);
app.use('/', indexRouter);



app.listen(PORT, () => {
  console.log('Сервер работает, порт', PORT);
});
