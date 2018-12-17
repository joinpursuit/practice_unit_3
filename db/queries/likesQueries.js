const { db } = require("./index.js");

const getAllLikes = (req, res, next) => {
  db.any("SELECT  * FROM likes")
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Received all LIKES",
        body: data
      });
    })
    .catch(err => next(err));
};

const getLikesPostId = (req, res, next) => {
  let likesId = parseInt(req.params.id);
  db.any(
    "SELECT liker_id FROM likes JOIN posts ON likes.poster_id = posts.id WHERE likes.poster_id = $1",
    [likesId]
  )
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "All likes for a single POST",
        body: data
      });
    })
    .catch(err => next(err));
};

const addSingleLike = (req, res, next) => {
  db.none(
    "INSERT INTO likes(liker_id,poster_id) VALUES(${liker_id}, ${poster_id})",
    req.body
  )
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Confirmed you have added a singe Like "
      });
    })
    .catch(err => next(err));
};

const deleteSingleLike = (req,res,next)=>{
  let likeId = parseInt(req.params.id);
  db.result('DELETE FROM likes WHERE id=$1',likeId)
  .then(result => {
    res.status(200)
      .json({
        status: 'success',
        message: 'Removed a like',
        result: result
      })
  })
  .catch(err => next(err))
}

module.exports = { getAllLikes, getLikesPostId,addSingleLike ,deleteSingleLike};
