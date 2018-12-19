const { db } = require('./index.js')

const allComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this is all the comments'
    })
  })
  .catch(err => next(err));
}

const postComments = (req, res, next) => {
  let postID = parseInt(req.params.id)
  db.any('SELECT users.name, users.age, comments.body FROM comments JOIN users ON commenter_id = users.id WHERE post_id=$1', postID)
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this is all the comments for this post'
    })
  })
  .catch(err => next(err));
}

const addComment = (req, res, next) => {
  db.none('INSERT INTO comments(commenter_id, post_id, body) VALUES(${commenter_id}, ${post_id}, ${body})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you added a comment'
    })
  })
  .catch(err => next(err));
}

const updateComment = (req, res, next) => {
  db.none('UPDATE comments SET body=${body} WHERE id=${id}', {
    id: req.params.id,
    commenter_id: parseInt(req.body.commenter_id),
    body: req.body.body
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you updated this comment'
    })
  })
  .catch(err => next(err));
}

const deleteComment = (req, res, next) => {
  let commentId = parseInt(req.params.id)
  db.result('DELETE FROM comments WHERE id=$1', commentId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you deleted this comment',
      result: result
    })
  })
  .catch(err => next(err));
}


module.exports = {allComments, postComments, addComment, updateComment, deleteComment}
