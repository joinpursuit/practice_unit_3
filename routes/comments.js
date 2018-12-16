const express = require('express');
const router = express.Router();
const {
  getAllComments,
  getSinglePostComments,
  addComment,
  editComment,
  deleteComment,
} = require('../db/queries/comments');

router.get('/', getAllComments);
router.get('/posts/:id', getSinglePostComments);
router.post('/', addComment);
router.patch('/:id', editComment);
router.delete('/:id', deleteComment);

module.exports = router;
