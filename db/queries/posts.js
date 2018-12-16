const {
  db,
} = require('./index');

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got ALL POSTS',
          body: data,
        });
    }).catch((err) => next(err));
};

const getSinglePost = (req, res, next) => {
  let userId = req.params.id;
  db.one('SELECT * FROM posts WHERE id=$1', userId)
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got SINGLE POST',
          body: data,
        });
    }).catch((err) => (next(err)));
};

const createPost = (req, res, next) => {
  db.none('INSERT INTO posts (post_user_id, post_body) VALUES (${userId}, ${body})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'created new post',
          body: req.body,
        });
    })
    .catch((err) => (next(err)));
};

const editPost = (req, res, next) => {
  db.none('UPDATE posts SET post_body=${postBody} WHERE id=${postId}', {
    postBody: req.body.body,
    postId: req.params.id,
  }).then(() => (
    res.status(200)
    .json({
      status: 'success',
      message: 'updated post',
      body: req.body,
    })
  )).catch((err) => (next(err)));
};

const deletePost = (req, res, next) => {
  let postId = req.params.id;
  db.none('DELETE FROM posts WHERE id=$1', postId)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'deleted post',
          body: postId,
        });
    }).catch((err) => (next(err)));
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  editPost,
  deletePost,
};
