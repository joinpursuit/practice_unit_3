const express = require('express')
const router = express.Router();
const {getAllCommments,getPostComments,
postComment,
editComment,
deleteComment
} = require('../query/commentsQ.js'
)
router.get('/', getAllCommments)
router.get('/posts/:id',getPostComments)
router.post('/posts/:id', postComment)
router.patch('/:id', editComment)
router.delete('/:id', deleteComment)


module.exports = router