const { db } = require("./index.js");

const getAllComments = (req, res, next) => {
  db.any("SELECT  * FROM comments")
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Received all Comments",
        body: data
      });
    })
    .catch(err => next(err));
};

const getCommentsPostId = (req, res, next) => {
  let commentsId = parseInt(req.params.id);
  db.any(
    "SELECT comments.body FROM comments JOIN posts ON comments.post_id = posts.id WHERE comments.post_id = $1",
    [commentsId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "All comments for a single POST",
        body: data
      });
    })
    .catch(err => next(err));
};

const postSingleComment = (req, res, next) => {
  db.none(
    "INSERT INTO comments(commenter_id,post_id,body) VALUES(${commenter_id}, ${post_id},${body})",
    req.body
  )
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Confirmed you have added a single comment "
      });
    })
    .catch(err => next(err));
};

const updateComment = (req, res, next) => {
  db.none("UPDATE comments SET body=${body} WHERE id=${id}", {
    id: parseInt(req.params.id),
    body: req.body.body
  })
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Updated a Comment!"
      });
    })
    .catch(err => next(err));
};

const deleteComment = (req, res, next) => {
  let commentId = parseInt(req.params.id);
  db.result("DELETE FROM comments WHERE id=$1", commentId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "Removed a comment",
        result: result
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllComments,
  getCommentsPostId,
  postSingleComment,
  updateComment,
  deleteComment
};
