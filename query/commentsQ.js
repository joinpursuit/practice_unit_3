const db = require('../db/index.js').db

const getAllCommments = (req,res,next) => {
  db.any('SELECT * from comments').then((data)=> {
    res.status(200).json({
      status: 200,
      message: 'success',
      data: data
    })
  }).catch(err=> {
    return next(err)
  })
}

const getPostComments = (req, res, next) => {
  db.any('SELECT * from comments WHERE posts_id = $1',[req.params.id]).then((data) => {
    res.status(200).json({
      status: 200,
      message: 'success',
      data: data
    })
  }).catch(err => {
    return next(err)
  })
}


const postComment = (req, res, next) => {
  db.none('INSERT INTO comments (posts_id, user_id, body) VALUES (${postsid},${user_id},${body})', {
    postsid : req.params.id,
    user_id : req.body.user_id,
    body: req.body.body
  }).then((data) => {
    res.status(200).json({
      status: 200,
      message: 'success'
    })
  }).catch(err => {
    return next(err)
  })
}


const editComment = (req, res, next) => {
  db.none('UPDATE comments SET body = ${body} WHERE id = ${params}', {
    params: req.params.id,
    body: req.body.body
  }).then((data) => {
    res.status(200).json({
      status: 200,
      message: 'success'
    })
  }).catch(err => {
    return next(err)
  })
}

const deleteComment = (req, res, next) => {
  db.none('DELETE from comments WHERE id = ${params}', {
    params: req.params.id,
  }).then((data) => {
    res.status(200).json({
      status: 200,
      message: 'success'
    })
  }).catch(err => {
    return next(err)
  })
}

module.exports = {
  getAllCommments,
  getPostComments,
  postComment,
  editComment,
  deleteComment
}