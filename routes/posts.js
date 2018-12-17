const express = require('express');
const router = express.Router();
const {getAllPosts, getSinglePost, getUserPosts, addPosts, updatePost, deletePost} = require('../db/queries/postQueries.js')

router.get('/', getAllPosts);

router.get('/:id', getSinglePost);

router.get('/:id/user', getUserPosts);

router.post('/', addPosts);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);

module.exports = router;
