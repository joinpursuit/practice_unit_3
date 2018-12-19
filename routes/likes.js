let express = require('express')
let router = express.Router();
const db = require('../db/queriesLikes');

router.get('/', db.getAllLikes);
router.get('/posts/:id', db.getAllLikesForSinglePost);
router.post('/', db.addSingleLike);
router.delete('/:id', db.deleteSingleLike);




module.exports = router;
