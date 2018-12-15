const { db } = require("./index.js");

const getAllPosts = (req, res, next) => {
  db.any("SELECT * FROM posts")
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Received all POSTS",
        data: data,
      });
    })
    .catch(err => next(err));
};

const getSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one('SELECT * FROM posts WHERE id=$1', postId)
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          message: "Received ONE POST!",
          data: data,
        })
    })
    .catch(err => next(err));
}

const createPost = (req, res, next) => {
  db.none('INSERT INTO users(id,poster_id, body) VALUES(${id},${poster_id}, ${body})', req.body)
    .then(data => {
      res.status(200)
        .json({
          status: 'success',
          message: 'Confirmed you have posted something '
        })
    })
    .catch(err => next(err))
}

// const updatePost = (req, res, next) => {
//   db.none('UPDATE posts SET poster_id=${poster_id}, body=${body} WHERE id=${id}',{
//     poster_id: req.body.poster_id,
//     body: req.body.body,
//     id: parseInt(req.params.id)
//   })
//   .then(() => {
//     res.status(200)
//       .json({
//         status: 'success',
//         message: 'Updated a POST!'
//       })
//   })
//   .catch(err => next(err))
// }

const deletePost = (req,res,next)=>{
  let postId = parseInt(req.params.id);
  db.result("DELETE FROM posts WHERE id=$1",postId)
  .then(result => {
    res.status(200)
      .json({
        status: 'success',
        message: 'Removed a post',
        result: result
      })
  })
  .catch(err => next(err))
}
module.exports = {getAllPosts,getSinglePost,createPost,deletePost}
