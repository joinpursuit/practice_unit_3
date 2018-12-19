const
  db = require('./index.js');

//get all comments
const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
    .then(data => {
      res.status(200).json({
        status: "Success!",
        message: "Got All Comments",
        body: data
      });
    })
    .catch(err => {
      return next(err);
    });
};

//get all comments for a single post
const getAllCommentsForPost = (req, res, next) => {
  let postId = req.params.id;
  db.any('SELECT comments.* FROM comments WHERE post_id=$1', postId)
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got all comments for a post',
          body: data,
        });
    }).catch((err) => (next(err)));
}

//add a single comment
const addComment = (req, res, next) => {
  req.body.user_id = parseInt(req.body.user_id);
  req.body.post_id = parseInt(req.body.post_id);
  db.none('INSERT INTO comments(post_id,user_id,body) VALUES(${post_id}, ${user_id}, ${body})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: "success",
          message: "Added a Comment!"
        })
    })
    .catch(err => {
      return next(err);
    })
}

//edits Comment
const editComment = (req, res, next) => {
  db.none('UPDATE comments SET body=${body} WHERE id=${id}', {
    body: req.body.body,
    id: req.params.id,
  }).then(() => (
    res.status(200)
    .json({
      status: 'success',
      message: 'edited a Comment!',
      body: req.body,
    })
  )).catch((err) => (next(err)));
};

//delete a comment
const deleteComment = (req, res, next) => {
  let commentId = parseInt(req.params.id);
  db.result('DELETE FROM comments WHERE id=$1', commentId)
    .then(result => {
      res.status(200)
        .json({
          status: "success",
          message: "You have deleted a Comment!",
          result: result
        });
    })
    .catch(err => {
      return next(err)
    });
}


module.exports = {
  getAllComments,
  getAllCommentsForPost,
  addComment,
  editComment,
  deleteComment
};