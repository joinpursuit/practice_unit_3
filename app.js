const express = require('express');
const app = express();
const bodyParser = require('body-Parser');
const users = require('./routes/users.js');
const posts = require('./routes/posts.js');
const likes = require('./routes/likes.js');
const comments = require('./routes/comments.js');
const albums = require('./routes/albums.js');
const pictures = require('./routes/pictures.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/users', users);

app.use('/posts', posts);

app.use('/likes', likes);

app.use('/comments', comments);

app.use('/albums', albums);

app.use('/pictures', pictures);

app.get('/', (req, res) => {
  res.send('this is the home page for facebook')
})

app.listen(2018, () => {
  console.log('you are doing the facebook practice_unit_3 test on port 2018')
})
