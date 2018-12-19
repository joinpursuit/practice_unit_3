// const pgp = require('pg-promise')({});
// const db = pgp('postgres://localhost:5432/facebook');
const { db } = require('./index.js')

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts').then(posts => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got ALL posts',
      body: posts
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}

const getSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one('SELECT * FROM posts WHERE id=$1;', [postId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got a SINGLE post.',
      body: data //data IS the single user already.
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}

const addSinglePost = (req, res, next) => {
  db.none(
    "INSERT INTO posts (user_id, body) VALUES (${user_id}, ${body})", req.body)
    .then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'New user ADDED.',
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}


const editSinglePost = (req, res, next) => {
  // let postId = parseInt(req.params.id);
  db.none(
    "UPDATE posts SET body=${newBody} WHERE posts.id=${postId}", {
      newBody: req.body.body,
      postId: parseInt(req.params.id)
    }
  ).then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'New user ADDED.',
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}


const deleteSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.result('DELETE FROM posts WHERE posts.id=$1', [postId])
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: `You have removed ${result}.`,
      result: result
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}



module.exports = { getAllPosts, getSinglePost, addSinglePost, editSinglePost, deleteSinglePost };
