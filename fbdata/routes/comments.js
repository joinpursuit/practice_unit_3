const express = require('express');
const router = express.Router();
const {
  getAllComments,
  getAllCommentsForPost,
  addComment,
  editComment,
  deleteComment
} = require('../db/queries/commentqueries.js');

// // - GET `/comments` - Get all comments.
router.get('/', getAllComments);

// // - GET `/comments/posts/:id` - Get all comments for a single post.
router.get('/posts/:id', getAllCommentsForPost);

// // - POST `/comments` - Add single comment.
router.post('/', addComment);

// - PATCH `/comments/:id` - Edit single comment.
router.patch('/:id', editComment);

// - DELETE `/comments/:id` - Delete single comment.
router.delete('/:id', deleteComment);

module.exports = router;