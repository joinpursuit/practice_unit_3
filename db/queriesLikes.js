// const pgp = require('pg-promise')({});
// const db = pgp('postgres://localhost:5432/facebook');
const { db } = require('./index.js')

const getAllLikes = (req, res, next) => {
  db.any('SELECT * FROM likes').then(likes => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got ALL likes',
      body: likes
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}

const getAllLikesForSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.any('SELECT * FROM likes JOIN posts ON likes.user_id=posts.user_id WHERE likes.post_id=$1;', [postId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got ALL LIKES for this post.',
      body: data //this result data IS the likes belonging to a post.
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}
// POST: /likes/posts/:id
const addLikeForSinglePost = (req, res, next) => {
  db.none(
    "INSERT INTO likes(user_id, post_id) VALUES (${userId}, ${postId})", {
      userId: req.body.user_id,
      postId: req.params.id
    }
  ).then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'Posted new Like.',
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
} // working - but psequel vlues = NULL ?!?!

const deleteSingleLike = (req, res, next) => {
  let likeId = parseInt(req.params.id);
  db.result('DELETE FROM likes WHERE likes.id=$1', [likeId])
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: `You have removed a LIKE.`,
      result: result
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}



module.exports = { getAllLikes, getAllLikesForSinglePost, addLikeForSinglePost, deleteSingleLike };
