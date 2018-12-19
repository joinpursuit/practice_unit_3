const
  db = require('./index.js');

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
    .then(data => {
      res.status(200).json({
        status: "Success!",
        message: "Got All Posts",
        body: data
      });
    })
    .catch(err => {
      return next(err);
    });
};

const getSinglePost = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM posts WHERE id =$1', [userId])
    .then(data => {
      res.status(200)
        .json({
          status: "Success!",
          message: "Got A Single Post",
          body: data
        })
    })
    .catch(err => {
      return next(err)
    })
}

const createPost = (req, res, next) => {
  req.body.user_id = parseInt(req.body.user_id);
  db.none('INSERT INTO posts(user_id,body) VALUES(${user_id}, ${body})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: "success",
          message: "ADDED a Post"
        })
    })
    .catch(err => {
      return next(err);
    })
}

const updatePost = (req, res, next) => {
  db.none('UPDATE posts SET body=${body} WHERE id=${post_id}', {
    body: req.body.body,
    post_id: req.params.id,
  }).then(() => (
    res.status(200)
    .json({
      status: 'success',
      message: 'Updated a Post',
      body: req.body,
    })
  )).catch((err) => (next(err)));
};

const deletePost = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM posts WHERE id=$1', userId)
    .then(result => {
      res.status(200)
        .json({
          status: "success",
          message: "You have deleted a Post",
          result: result
        });
    })
    .catch(err => {
      return next(err)
    });
}
module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost
}