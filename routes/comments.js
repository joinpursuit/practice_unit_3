const express = require('express');
const router = express.Router();
const {getAllComments,getCommentsPostId,postSingleComment,updateComment,deleteComment} = require('../db/queries/commentsQueries.js')

router.get('/',getAllComments);
router.get('/posts/:id',getCommentsPostId)
router.post('/',postSingleComment)
router.patch('/:id',updateComment)
router.delete('/:id',deleteComment)

module.exports  = router;
