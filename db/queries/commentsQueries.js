const { db } = require('./index.js')

const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you got all comments!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getCommentsOfSinglePost = (req, res, next) => {
  let commentsId = parseInt(req.params.id)
  db.one('SELECT * FROM comments WHERE id=$1', commentsId)
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you got a single post!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addComment = (req, res, next) => {
  db.none('INSERT INTO comments(commenters_id, posts_id, body) VALUES(${commenters_id}, ${posts_id}, ${body})', req.body)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have added a comment'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const editComment = (req, res, next) => {
  db.none('UPDATE comments SET body=${body} WHERE id=${id}', {
    body: req.body.body,
    id: parseInt(req.params.id)
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have just edited a comment'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const deleteComment = (req, res, next) => {
  let commentsId = parseInt(req.params.id)
  db.result('DELETE FROM comments WHERE id=$1', commentsId)
    .then(result => {
      res.status(200).json({
        status: 'success',
        result: result,
        message: 'you have deleted a comment!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllComments, getCommentsOfSinglePost, addComment, editComment, deleteComment }
