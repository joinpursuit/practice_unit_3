const express = require('express')
const app = express ();
// const bodyParser = require('body-parser');

const users = require('./routes/users.js')
const pictures = require('./routes/pictures.js')
const posts = require('./routes/posts.js')
const albums = require('./routes/albums.js')
const likes = require('./routes/likes.js')
const comments = require('./routes/comments.js')

// app.use(bodyParser.urlencoded({extend: false }));
// app.use(bodyParser.json());

port = 1337;

app.listen(port, () => {
  console.log(`Facebook Server on on Port : ${port}`)
})

app.get('/', (req,res,next)=> {
  res.send("THIS IS THE MAIN PAGE")
})

app.use('/users', users);
app.use('/pictures', pictures);
app.use('/posts', posts);
app.use('/albums', albums);
app.use('/likes', likes);
app.use('/comments', comments);



