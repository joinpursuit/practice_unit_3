const { db } = require('./index.js')


const getLikes = (req, res, next) => {
  db.any('SELECT * FROM likes')
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'you like a post'
    })
  })
  .catch(err => next(err));
}

const postLikes = (req, res, next) => {
  let likeId = parseInt(req.params.id)
  db.any('SELECT DISTINCT users.name, users.age FROM posts JOIN likes ON likes.post_id = posts.id JOIN users ON users.id=likes.liker_id WHERE posts.id=$1', likeId)
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'all the likes for this post'
    })
  })
  .catch(err => next(err));
}

const addLike = (req, res, next) => {
  db.none('INSERT INTO likes(liker_id, post_id) VALUES(${liker_id}, ${post_id})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you like a post'
    })
  })
  .catch(err => next(err));
}

const removeLike = (req, res, next) => {
  let likeId = parseInt(req.params.id)
  db.result('DELETE FROM likes WHERE id=$1', likeId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you remove this like',
      result: result
    })
  })
  .catch(err => next(err));
}


module.exports = {getLikes, postLikes, addLike, removeLike}
