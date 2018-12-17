const {
  db,
} = require('./index');

const getAllLikes = (req, res, next) => {
  db.any('SELECT * FROM likes')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got ALL LIKES',
          body: data,
        });
    }).catch((err) => (next(err)));
};

const getSinglePostLikes = (req, res, next) => {
  let postId = req.params.id;
  db.one('SELECT * FROM likes WHERE like_post_id=$1', postId)
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got SINGLE LIKE',
          body: data,
        });
    }).catch((err) => (next(err)));
};

const addLike = (req, res, next) => {
  db.none('INSERT INTO likes (like_user_id, like_post_id) VALUES (${likeUserId}, ${likePostId})', {
    likeUserId: req.body.userId,
    likePostId: req.body.postId,
  }).then(() => {
    res.status(200)
      .json({
        status: 'success',
        message: 'added one LIKE to post',
        body: req.body,
      });
  }).catch((err) => (next(err)));
};

const deleteLike = (req, res, next) => {
  db.none('DELETE from likes WHERE like_post_id=${postId} AND like_user_id=${userId}', {
      postId: req.params.id,
      userId: req.body.userId,
    })
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'deleted SINGLE LIKE from post',
          body: req.body,
        });
    }).catch((err) => (next(err)));
};

module.exports = {
  getAllLikes,
  getSinglePostLikes,
  addLike,
  deleteLike,
};
