const { db } = require('./index.js')

const getAllLikes = (req, res, next) => {
  db.any('SELECT * FROM likes')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        body: data,
        message: 'you have all likes!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getLikeForSinglePost = (req, res, next) => {
  let likesId = parseInt(req.params.id)
  db.any('SELECT SUM(likers_id) FROM likes WHERE posts_id=$1', likesId)
    .then((data) => {
      res.status(200).json({
        status: 'success',
        body: data,
        message: 'you have all likes for this single post'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addLike = (req, res, next) => {
  db.none('INSERT INTO likes(likers_id) VALUES (${likers_id})' , {
    likers_id: req.body.likers_id,
    posts_id: parseInt(req.body.likesId)
  })
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'you have added a like'
    })
  })
  .catch(err => {
    return next(err)
  })
}

const deleteLike = (req, res, next) => {
  let likesId = parseInt(req.params.id)
  db.result('DELETE FROM likes WHERE id=$1', likesId)
    .then(result => {
      res.status(200).json({
        status: 'success',
        result: result,
        message: 'you have deleted a like!'
      })
    })
    .catch(err => {
      return next(err)
    })
}


module.exports = { getAllLikes, getLikeForSinglePost, addLike, deleteLike }
