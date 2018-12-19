const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const users = require('./routes/users.js');
const posts = require('./routes/posts.js');
const likes = require('./routes/likes.js');
const comments = require('./routes/comments.js');
const albums = require('./routes/albums.js');
const pictures = require('./routes/pictures.js');

app.use('/users', users);
app.use('/posts', posts);
app.use('/likes', likes);
app.use('/comments', comments);
app.use('/albums', albums);
app.use('/pictures', pictures);


app.get('/', (req, res) => {
  res.send('This is the HOMEPAGE');
})

app.get('/*', (req, res) => {
  res.send(' You\'ve got an error - main app.js')
})

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
})
