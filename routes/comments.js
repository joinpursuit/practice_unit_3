const express = require('express')
const router = express.Router();
const { getAllComments,
        addComment,
        getCommentsForPost,
        editSingleComment,
        deleteComment } = require('../queries/q-comments.js')

router.get('/', getAllComments)
router.get('/posts/:id', getCommentsForPost)
router.post('/', addComment)
router.patch('/:id', editSingleComment)
router.delete('/:id', deleteComment)

module.exports = router
