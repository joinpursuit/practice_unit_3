const { db } = require('./index.js')

const getAllLikes = (req, res, next) => {
  db.any('SELECT * FROM likes')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have all likes!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getLikeForSinglePost = (req, res, next) => {
  let likesId = parseInt(req.params.id)
  db.one('SELECT * FROM likes JOIN users ON users.id = likes.likes_id WHERE likes.id=$1', likesId)
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have all likes for this single post'
      })
    })
    .catch(err => {
      return next(err)
    })
}
module.exports = { getAllLikes, getLikeForSinglePost }
