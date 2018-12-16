const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const users = require('./routes/users');
const posts = require('./routes/posts');
const likes = require('./routes/likes');
const comments = require('./routes/comments');

const listenMsg = () => (
  console.log(`listening on port${port}`));

const faviconMsg = (req, res, next) => (
  req.originalUrl &&
  req.originalUrl.split('/').pop() === 'favicon.ico' ?
  res.sendStatus(204) : next());

const catchAll = (req, res, next) => {
  let err = new Error('Page Not Found');
  err.statusCode = 404;
  next(err);
};

const errMsg = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
  console.log(err.message);
};

const endRoute = (req, res) => (res.send('Home Page'));

app.use(faviconMsg);
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use('/users', users);
app.use('/posts', posts);
app.use('/likes', likes);
app.use('/comments', comments);

app.get('/', endRoute);

app.use('*', catchAll);
app.use(errMsg);

app.listen(port, listenMsg);
