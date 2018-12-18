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

module.exports = { getAllComments, getCommentsOfSinglePost }
