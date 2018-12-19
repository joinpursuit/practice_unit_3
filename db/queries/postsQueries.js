const db = require('./index.js');

function getAllPosts(req, res, next) {
  db.any('SELECT * FROM posts')
  .then(posts => {
    res.status(200).json({
      status: 'success',
      message: 'got all the posts',
      body: posts
    })
  })
  .catch(err => next(err));
}

function getSinglePost(req, res, next) {
  db.one('SELECT * FROM posts WHERE id=$1', [req.params.id])
  .then(post => {
    res.status(200).json({
      status: 'success',
      message: 'got 1 post',
      body: post
    })
  })
  .catch(err => next(err));
}

function addPost(req, res, next) {
  req.body.poster_id = +(req.body.poster_id);
  db.none('INSERT INTO posts(poster_id, body) VALUES(${poster_id}, ${body})', req.body)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'added 1 post'
    })
  })
  .catch(err => next(err));
}

function editPost(req, res, next) {
  req.body.poster_id = +(req.body.poster_id);
  db.none('UPDATE posts SET poster_id=${poster_id}, body=${body} WHERE id=${id}', {
    poster_id : +(req.body.poster_id),
    body: req.body.body,
    id: +(req.params.id)
  })
  .then(()=> {
    res.status(200).json({
      status: 'success',
      message: 'updated 1 post'
    })
  })
  .catch(err => next(err));
}

function deletePost(req, res, next) {
  let postId = req.params.id;
  db.result('DELETE FROM posts WHERE id=$1', [postId])
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'deleted post',
      body: result
    })
  })
  .catch(err => next(err));
}


module.exports = { getAllPosts, getSinglePost, addPost, editPost, deletePost };
