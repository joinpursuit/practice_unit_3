const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/facebook');

const getAllComments = (req, res, next) => {
  db.any('SELECT * FROM comments').then(comments => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got ALL comments',
      body: comments
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}

const getAllCommentsForSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.any('SELECT comments.* FROM comments JOIN posts ON comments.user_id=posts.user_id WHERE comments.post_id=$1;', [postId])
  //if SELECT * - sql will surplant comments.body with posts.body. Specify that you want comments.body OR! OR! comments.*
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got ALL COMMENTS for this post.',
      body: data
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}

const addSingleComment = (req, res, next) => {
  db.none(
    "INSERT INTO comments (user_id, post_id, body) VALUES (${userId}, ${postId}, ${newBody})", req.body)
    .then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'New user ADDED.'
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}
// userId 3
// postId 3
// newBody Yeah! This was so great! LOVE IT!


const editSingleComment = (req, res, next) => {
  // let postId = parseInt(req.params.id);
  db.none(
    "UPDATE comments SET body=${newBody} WHERE comments.id=${commentId}", {
      newBody: req.body.body,
      commentId: parseInt(req.params.id) //all i need to reference. DONT NEED TO CHANGE EVERYTHING!
    }
  ).then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'Old comment PATCHED!',
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}
//body:  I was wrong. I missed the context. This was profound.
//commentId:  2


const deleteSingleComment = (req, res, next) => {
  let commentId = parseInt(req.params.id);
  db.result('DELETE FROM comments WHERE comments.id=$1', [commentId])
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: `You have REMOVED this COMMENT.`,
      result: result
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}
//DELETE:   http://localhost:3000/comments/3



module.exports = { getAllComments, getAllCommentsForSinglePost, addSingleComment, editSingleComment, deleteSingleComment };
