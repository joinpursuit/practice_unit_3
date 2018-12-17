const express = require('express');
const router = express.Router();
const {getAllLikes,getLikesPostId,addSingleLike,deleteSingleLike} = require('../db/queries/likesQueries.js')

router.get('/',getAllLikes);
router.get('/posts/:id',getLikesPostId)
router.post('/',addSingleLike)
router.delete('/:id',deleteSingleLike)

module.exports  = router;
