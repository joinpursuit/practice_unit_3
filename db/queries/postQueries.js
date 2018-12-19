const { db } = require('./index.js')

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this is all the posts'
    })
  })
  .catch(err => next(err))
}

const getSinglePost = (req, res, next) => {
  let postId = req.params.id;
  db.one('SELECT * FROM posts WHERE id=$1', postId)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this is ONE post'
    })
  })
  .catch(err => next(err));
}

const getUserPosts = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.any('SELECT posts.* FROM users JOIN posts ON POSTS.poster_id = users.id WHERE users.id=$1', [userId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this is ALL this user posts'
    })
  })
  .catch(err => next(err));
}

const addPosts = (req, res, next) => {
  if (req.body.poster_id) {
    req.body.poster_id = parseInt(req.body.poster_id);
  } else {
    req.body.poster_id = null;
  }
  // if i want to shorten the above line, just use the one below
  // req.body.poster_id = req.body.poster_id ? parseInt(req.body.poster_id) : null
  db.none('INSERT INTO posts(poster_id, body) VALUES(${poster_id}, ${body})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you added a new post'
    })
  })
  .catch(err => next(err));
}

const updatePost = (req, res, next) => {
  db.none('UPDATE posts SET poster_id=${poster_id}, body=${body} WHERE id=${id}', {
    id: req.params.id,
    poster_id: parseInt(req.body.poster_id),
    body: req.body.body
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you changed your post'
    })
  })
  .catch(err => next(err));
}

const deletePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.result('DELETE FROM posts WHERE id=$1', postId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you deleted this post',
      result: result
    })
  })
  .catch(err => next(err));
}

module.exports = {getAllPosts, getSinglePost, getUserPosts, addPosts, updatePost, deletePost}
