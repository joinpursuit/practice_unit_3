const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const users = require('./routes/users.js')
const posts = require('./routes/posts.js')
const pictures = require('./routes/pictures.js')
const likes = require('./routes/likes.js')
const comments = require('./routes/comments.js')
const albums = require('./routes/albums.js')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/users', users)
app.use('/posts', posts)
app.use('/pictures', pictures)
app.use('/comments', comments)
app.use('/likes', likes)
app.use('/albums', albums)

app.get('/', (req, res) => {
  res.send('This is the HOMEPAGE!')
})

//error handler '*'. res send('error')

app.listen(5019, () => {
  console.log('You are listening in port 3000');
})
