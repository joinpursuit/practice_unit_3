const express = require('express');
const router = express.Router();
const {
  getAllLikes,
  getAllLikesForPost,
  addLike,
  deleteLike
} = require('../db/queries/likequeries.js')

// - GET `/likes` - Get all likes.
router.get('/', getAllLikes);

// - GET `/likes/posts/:id` - Get all likes for a single post.
router.get('/posts/:id', getAllLikesForPost);
//
// - POST `/likes` - Add single like.
router.post('/', addLike);
//
//
// - DELETE `/likes/:id` - Delete single like.
router.delete('/:id', deleteLike)


module.exports = router;