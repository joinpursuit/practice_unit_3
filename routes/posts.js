const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  getSinglePost,
  createPost,
  editPost,
  deletePost,
} = require('../db/queries/posts');

router.get('/', getAllPosts);
router.get('/:id', getSinglePost);
router.post('/', createPost);
router.patch('/:id', editPost);
router.delete('/:id', deletePost);

module.exports = router;
