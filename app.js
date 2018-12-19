const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const users = require('./routes/users');
const posts = require('./routes/posts');
const likes = require('./routes/likes');
const comments = require('./routes/comments');
const albums = require('./routes/albums');
const pictures = require('./routes/pictures');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', users);
app.use('/posts', posts);
app.use('/likes', likes);
app.use('/comments', comments);
app.use('/albums', albums);
app.use('/pictures', pictures);

app.get('*', (req, res) => {
  res.send('error');
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
})




//
