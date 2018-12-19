const { db } = require('./q-index.js');

const getAllLikes = (req, res, next) => {
  db.any('SELECT * FROM likes')
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "you got all likes",
        data: data
      })
    })
    .catch(err => next(err))
}

const getLikesForPost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.any('SELECT * FROM likes WHERE post_id=$1', postId)
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "you got all likes for a post",
        data: data
      })
    })
    .catch(err => next(err))
}

const addLike = (req, res, next) => {
  db.none('INSERT INTO likes(liker_id, post_id) VALUES(${liker_id}, ${post_id})', req.body)
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "you added a like"
      })
    })
    .catch(err => next(err))
}

const deleteLike = (req, res, next) => {
  let likeId = parseInt(req.params.id);
  db.result('DELETE FROM likes WHERE id=$1', likeId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "you deleted a like",
        result: result
      })
    })
    .catch(err => next(err))
}
module.exports = {  getAllLikes,
                    getLikesForPost,
                    addLike,
                    deleteLike }
