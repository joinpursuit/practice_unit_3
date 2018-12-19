let express = require('express')
let router = express.Router();
const db = require('../db/queriesComments');

router.get('/', db.getAllComments);
router.get('/posts/:id', db.getAllCommentsForSinglePost);
router.post('/posts/:id', db.addCommentForSinglePost);
router.patch('/:id', db.editSingleComment)
router.delete('/:id', db.deleteSingleComment);


module.exports = router;
