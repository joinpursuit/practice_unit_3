const { db } = require('./index.js')

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this is all the posts'
    })
  })
  .catch(err => next(err))
}

const getSinglePost = (req, res, next) => {
  let postId = req.params.id;
  db.one('SELECT * FROM posts WHERE id=$1', postId)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this is ONE post'
    })
  })
  .catch(err => next(err));
}


module.exports = {getAllPosts, getSinglePost}
