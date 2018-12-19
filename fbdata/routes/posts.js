const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost
} = require('../db/queries/postqueries.js');

// - GET `/posts` - Get all posts.
router.get('/', getAllPosts);
//
// - GET `/posts/:id` - Get single post.
router.get('/:id', getSinglePost);
//
// - POST `/posts` - Add single post.
router.post('/', createPost);
//
// - PATCH `/posts/:id` - Edit single post.
router.patch('/:id', updatePost);
//
// // - DELETE `/posts/:id` - Delete single post.
router.delete('/:id', deletePost);

module.exports = router;