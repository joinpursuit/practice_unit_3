let express = require('express')
let router = express.Router();
const db = require('../db/queriesLikes');

router.get('/', db.getAllLikes);
router.get('/posts/:id', db.getAllLikesForSinglePost);
//
router.post('/posts/:id', db.addLikeForSinglePost);
//
router.delete('/:id', db.deleteSingleLike);




module.exports = router;
