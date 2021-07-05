const express = require('express')
const router = express.Router()
const { getAllComments, getCommentsOfSinglePost, addComment, editComment, deleteComment } = require('../db/queries/commentsQueries.js')

router.get('/', getAllComments)
router.get('/posts/:id', getCommentsOfSinglePost)
router.post('/', addComment)
router.patch('/:id', editComment)
router.delete('/:id', deleteComment)

module.exports = router
