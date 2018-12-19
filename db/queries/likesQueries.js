const db = require('./index.js');

function getAllLikes(req, res, next) {
  db.any('SELECT * FROM likes')
  .then(likes => {
    res.status(200).json({
      status: 'success',
      message: 'get ALL likes',
      body: likes
    })
  })
  .catch(err => next(err));
}

function likesPerPost(req, res, next) {
  let postId = +(req.params.id);
  db.any('SELECT * FROM likes WHERE post_id=$1', [postId])
  .then(likes => {
    console.log(likes);
    res.status(200).json({
      status: 'success',
      message: 'Get all likes for a single post.',
      body: likes
    })
  })
  .catch(err => next(err));
}

function addALike(req, res, next) {
  req.body.liker_id = +(req.body.liker_id);
  req.body.post_id = +(req.params.id);
  db.none('INSERT INTO likes(liker_id, post_id) VALUES(${liker_id}, ${post_id})', req.body)
  .then(()=> {
    res.status(200).json({
      status: 'success',
      message: 'added 1 like',
    })
  })
  .catch(err => next(err));
}

function deleteALike(req, res, next) {
  let likeId = req.params.id;
  db.result('DELETE FROM likes WHERE id=$1', [likeId])
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'you deleted a like',
      body: result
    })
  })
  .catch(err => next(err));
}


module.exports = { getAllLikes, likesPerPost, addALike, deleteALike };
