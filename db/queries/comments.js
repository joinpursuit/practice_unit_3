const {
  db,
} = require('./index');

const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got ALL COMMENTS',
          body: data,
        });
    }).catch((err) => (next(err)));
};

const getSinglePostComments = (req, res, next) => {
  let postId = req.params.id;
  console.log(req.params);
  db.any('SELECT * FROM comments WHERE comment_post_id=$1', postId)
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got ALL COMMENTS from single post',
          body: data,
        });
    }).catch((err) => (next(err)));
};

const addComment = (req, res, next) => {
  db.none('INSERT INTO comments (comment_user_id, comment_post_id, comment_body) VALUES (${userId},${postId},${comment})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'added COMMENT to post',
          body: req.body,
        });
    }).catch((err) => (next(err)));
};

const editComment = (req, res, next) => {
  db.none('UPDATE comments SET comment_body=${comment} WHERE comment_post_id=${postId} AND comment_user_id=${userId}', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'updated COMMENT on post',
          body: req.body,
        });
    }).catch((err) => (next(err)));
};

const deleteComment = (req, res, next) => {
  db.none('DELETE FROM comments WHERE id=$1', req.params.id)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'deleted single COMMENT',
          body: req.params.id,
        });
    }).catch((err) => (next(err)));
};

module.exports = {
  getAllComments,
  getSinglePostComments,
  addComment,
  editComment,
  deleteComment,
};
