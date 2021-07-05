const express = require('express');
const router = express.Router();
const { getAllPosts, getSinglePost, deletePosts, createPosts, editPosts } = require('../db/queries/postsQueries.js')


router.get('/', getAllPosts)
router.get('/:id', getSinglePost)
router.post('/', createPosts)
router.delete('/:id', deletePosts)
router.patch('/:id', editPosts)

module.exports = router
