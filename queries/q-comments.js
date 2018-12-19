const { db } = require('./q-index.js')

const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "you got all comments",
        body: data
      })
    })
    .catch(err => next(err))
}

const addComment = (req, res, next) => {
  db.none('INSERT INTO comments(commenter_id, body, post_id) VALUES(${commenter_id}, ${body}, ${post_id})', req.body)
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "you added a comment"
      })
    })
    .catch(err => next(err))
}

const getCommentsForPost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.any('SELECT * FROM comments WHERE post_id=$1', postId)
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "you got all comments for a post",
        data: data
      })
    })
    .catch(err => next(err))
}

const editSingleComment = (req, res, next) => { //PATCH - remove the undefined!!
 let queryStrArr = [];
 let keysArray = Object.keys(req.body)
 keysArray.filter(key => key !== undefined)
          .forEach(key => {
   queryStrArr.push(key + "=${" + key + "}");
 });
 let fullQuery = queryStrArr.join(", ");

  db.none('UPDATE comments SET '+fullQuery+' WHERE id='+req.params.id, req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "comment was edited"
      })
    })
    .catch(err => next(err));
}

const deleteComment = (req, res, next) => {
  let commentId = parseInt(req.params.id);
  db.none('DELETE FROM comments WHERE id=$1', commentId)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "comment was deleted"
      })
    })
    .catch(err => next(err))
}

module.exports = {  getAllComments,
                    addComment,
                    getCommentsForPost,
                    editSingleComment,
                    deleteComment }
