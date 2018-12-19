const
  db = require('./index.js');

//Get all likes.
const getAllLikes = (req, res, next) => {
  db.any('SELECT * FROM likes')
    .then(data => {
      res.status(200).json({
        status: "Success!",
        message: "Got All Likes",
        body: data
      });
    })
    .catch(err => {
      return next(err);
    });
}
//Get all likes for a single post.
const getAllLikesForPost = (req, res, next) => {
  let postId = req.params.id;
  db.any('SELECT likes.* FROM likes WHERE post_id=$1', postId)
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got all likes for post',
          body: data,
        });
    }).catch((err) => (next(err)));
};
//Add single like.
const addLike = (req, res, next) => {
  db.none('INSERT INTO likes (user_id,post_id) VALUES (${user_id}, ${post_id})', {
    user_id: parseInt(req.body.user_id),
    post_id: parseInt(req.body.post_id),
  }).then(() => {
    res.status(200)
      .json({
        status: 'success',
        message: 'Added a Like',
        body: req.body
      });
  }).catch((err) => (next(err)));
};
//Delete single like.

const deleteLike = (req, res, next) => {
  let likeId = parseInt(req.params.id);
  db.result('DELETE FROM likes  WHERE id=$1', likeId)
    .then(result => {
      res.status(200)
        .json({
          status: "Success",
          message: " You have deleted a Like",
          result: result

        });
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = {
  getAllLikes,
  getAllLikesForPost,
  addLike,
  deleteLike
}