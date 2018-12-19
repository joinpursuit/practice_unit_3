const { db } = require('./q-index.js');

const getAllPosts = (req, res, next) => {
  db.any('SELECT * FROM posts')
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "got all posts!",
        data: data
      })
    })
    .catch(err => next(err))
}
const getOnePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.one('SELECT * FROM posts WHERE id=$1', postId)
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "got one post!",
        data: data
      })
    })
    .catch(err => next(err))
}
const createPost = (req, res, next) => {
  db.none('INSERT INTO posts(poster_id, body) VALUES(${poster_id}, ${body})' , req.body)
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "created one post!"
      })
    })
    .catch(err => next(err))
}

const editPost = (req, res, next) => { //PATCH
  let queryStringArray = [];
  let bodyKeys = Object.keys(req.body);
  bodyKeys.forEach(key => {
    queryStringArray.push(key + "=${" + key + "}");
  });
  //poster_id=${poster_id}, body=${body}
  let queryString = queryStringArray.join(", ");
  db
    .none(
      "UPDATE posts SET " + queryString + " WHERE id=" + req.params.id,
      req.body
    )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "You Updated a POST!"
      });
    })
    .catch(err => next(err));
}

const deletePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.result('DELETE FROM posts WHERE id=$1', postId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "you deleted a post!",
        result: result
      })
    })
    .catch(err => next(err))
}

module.exports = {  getAllPosts,
                    getOnePost,
                    createPost,
                    editPost,
                    deletePost }
/*

- DELETE `/posts/:id` - Delete single post.
*/
