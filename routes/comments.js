const express = require('express');
const router = express.Router();
const {allComments, postComments, addComment, updateComment, deleteComment} = require('../db/queries/commentQueries.js')


router.get('/', allComments);

router.get('/posts/:id', postComments);

router.post('/:id', addComment);

router.patch('/:id', updateComment);

router.delete('/:id', deleteComment);


module.exports = router;
