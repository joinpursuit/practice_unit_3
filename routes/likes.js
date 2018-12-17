const express = require('express');
const router = express.Router();
const {getLikes, postLikes, addLike, removeLike} = require('../db/queries/likeQueries.js');

router.get('/', getLikes);

router.get('/posts/:id', postLikes);

router.post('/', addLike);

router.delete('/:id', removeLike);


module.exports = router;
