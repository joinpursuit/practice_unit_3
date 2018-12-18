const db = require('../db/index.js').db

function getAllLikes(req,res,next) {
  db.any('SELECT * FROM likes').then((data)=>{
    res.status(200).json({
      status: 200,
      message: "You're Welcome",
      data: data
    })
  }
  )}

  function getSingleLikeInfo(req,res,next) {
    db.any('SELECT user_id, posts_id FROM likes WHERE posts_id=$1',[req.params.id]).then((data)=>{
      res.status(200).json({
        status: 200,
        message: "Which Likes is which like.",
        data: data
      })
    }).catch((err)=>{
      return next(err)
    })
  }

  function addLike (req,res,next){
    console.log(req.params.id)
    db.none('INSERT INTO likes (posts_id,user_id) VALUES (${postid}, ${user_id})', {
      postid: parseInt(req.params.id),
      user_id : req.body.user_id
    }).then(()=>{
      res.status(200).json({
        status: 200,
        message: "Added the Like to the Post"
      })
    }).catch(err => {
      return next(err)
    })
  }

  function removeLike (req,res,next) {
    db.none('DELETE FROM likes WHERE id=$1',[req.params.id]).then(()=>{
      res.status(200).json({
        status: 200,
        message: "remove a like"
      })
    }).catch(err=>{
      return next(err)
    })
  }

module.exports = {
getAllLikes,
getSingleLikeInfo,
addLike,
removeLike
}