const express = require('express');
const router = express.Router();
const { getAllPosts,
        getOnePost,
        createPost,
        editPost,
        deletePost } = require('../queries/q-posts.js');

router.get('/', getAllPosts)
router.get('/:id', getOnePost)
router.post('/', createPost)
router.patch('/:id', editPost)
router.delete('/:id', deletePost)

module.exports = router
