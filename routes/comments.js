const express = require('express');
const router = express.Router();
const { getAllComments, commentsPerPost, addComment, editComment, deleteComment } = require('../db/queries/commentsQueries.js');

router.get('/', getAllComments);
router.get('/posts/:id', commentsPerPost);
router.post('/posts/:id', addComment);
router.patch('/:id', editComment);
router.delete('/:id', deleteComment);

module.exports = router;
