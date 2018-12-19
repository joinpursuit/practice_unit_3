const db = require('./index.js');

function getAllComments(req, res, next) {
  db.any('SELECT * FROM comments')
  .then(comments => {
    res.status(200).json({
      status: 'success',
      message: 'all of the comments!',
      body: comments
    })
  })
  .catch(err => next(err));
}

function commentsPerPost(req, res, next) {
  db.any('SELECT * FROM comments WHERE post_id=$1', req.params.id)
  .then(comments => {
    res.status(200).json({
      status: 'success',
      message: 'Got all comments for a single post',
      body: comments
    })
  })
  .catch(err => next(err));
}

function addComment(req, res, next) {
  req.body.comment_id = +(req.body.comment_id);
  req.body.post_id = +(req.params.id);
  db.none('INSERT INTO comments(comment_id, post_id, body) VALUES(${comment_id}, ${post_id}, ${body})', req.body)
  .then(()=> {
    res.status(200).json({
      status: 'success',
      message: 'you added 1 comment'
    })
  })
  .catch(err => next(err));
}

function editComment(req, res, next) {
  db.none('UPDATE comments SET comment_id=${comment_id}, post_id=${post_id}, body=${body} WHERE id=${id}', {
    comment_id: +(req.body.comment_id),
    post_id: +(req.body.post_id),
    body: req.body.body,
    id: +(req.params.id)
  })
  .then(()=> {
    res.status(200).json({
      status: 'success',
      message: 'you edited 1 comment',
    })
  })
  .catch(err => next(err));
}

function deleteComment(req, res, next) {
  let commentId = req.params.id;
  db.result('DELETE FROM comments WHERE id=$1', [commentId])
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'you deleted a comment',
      body: result
    })
  })
  .catch(err => next(err));
}

module.exports = { getAllComments, commentsPerPost, addComment, editComment, deleteComment };
