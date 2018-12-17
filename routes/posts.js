const express = require('express');
const router = express.Router();
const {getAllPosts,getSinglePost,createPost,deletePost,updatePost} = require('../db/queries/postsQueries.js');

router.get('/',getAllPosts)
router.get('/:id',getSinglePost)
router.post('/',createPost)
router.patch('/:id',updatePost)
router.delete('/:id', deletePost)

module.exports = router;
