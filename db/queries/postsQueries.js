const { db } = require('./index.js')

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        body: data,
        message: 'You have recieved all posts!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSinglePost = (req, res, next) => {
  let postsId = parseInt(req.params.id)
  db.one('SELECT * FROM posts WHERE id=$1', postsId)
    .then((data) => {
      res.status(200).json({
        status: 'success',
        body: data,
        message: 'You have a single post!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const deletePosts = (req, res, next) => {
  let postsId = parseInt(req.params.id)
  db.result('DELETE FROM posts WHERE id=$1', postsId)
    .then(result => {
      res.status(200).json({
        status: 'success',
        message: 'You have deleted a post!',
        result: result
      })
    })
    .catch(err => {
      return next(err)
    })
}

const createPosts = (req, res, next) => {
  db.none('INSERT INTO posts(posts_id, body) VALUES(${posts_id}, ${body})', req.body)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'You have created a new Post!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const editPosts = (req, res, next) => {
  db.none('UPDATE posts SET posters_id=${posters_id}, body=${body} WHERE id=${id}', {
    posters_id: req.body.posters_id,
    body: req.body.body,
    id: parseInt(req.params.id)
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have updated the post'
      })
    })
    .catch(err => {
      return next(err)
    })
}

// if we wannah update both userId and the body
// const postId = Number(req.params.id)
// let queryString = 'UPDATE posts SET ';
// if(req.body.user_id) {
//   queryString += `user_id = ${req.body.user_id}, body = '${req.body.body}'`;
// } else if (req.body.user_id) {
//   queryString += `user_id = ${req.params.user_id}`
// } else {
//   queryString += `body = '${req.body.body}'`
// }
//queryString += `WHERE id = ${postId}`
//console.log(queryString);
//db.none(queryString)


module.exports = { getAllPosts, getSinglePost, deletePosts, createPosts, editPosts }
