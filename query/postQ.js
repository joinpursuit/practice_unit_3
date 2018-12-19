const db = require('../db/index.js').db




function getAllPosts(req,res,next) {
  db.any('SELECT * FROM posts').then((data)=>{
    res.status(200).json({
      status: "GOOD",
      message: "Getting All Posts",
      data: data
    })
  }).catch(err => {return next(err)})
}

function getSinglePost(req,res,next) {
  let postId = req.params.id
  db.one('SELECT id, poster_id, body FROM posts WHERE id=$1',postId).then((data)=> {
    res.status(200).json({
      status: 200,
      message: "One info for you",
      data : data
    })
  })
}

function addApost(req, res, next) {
  db.none('INSERT INTO posts (poster_id, body) VALUES (${poster_id},${body})',req.body).then(() => {
    res.status(200).json({
      status: 200,
      message: "added a post",
    })
  })
}

function editPost (req,res,next) {
  db.none('UPDATE posts SET body = ${body} WHERE id = ${id}',{
    body : req.body.body,
    id: parseInt(req.params.id)
  }).then(()=> {
    res.status(200).json({
      status : 200,
      message : "Edit the Post",
    })
  }).catch((err)=>{
    return next(err)
  })
}

function popAPost(req,res,next) {
  db.none('DELETE FROM posts WHERE id=$1',[req.params.id]).then(()=>{
    res.status(200).json({
      status: 200,
      message:"delete the post"
    })
  })
}



module.exports = {
  getAllPosts,
  getSinglePost,
  addApost,
  editPost,
  popAPost
};