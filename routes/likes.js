const express = require('express');
const router = express.Router();
const { getAllLikes,
        addLike,
        getLikesForPost,
        deleteLike } = require('../queries/q-likes.js');

router.get('/', getAllLikes)
router.post('/', addLike)
router.get('/posts/:id', getLikesForPost)
router.delete('/:id', deleteLike)

module.exports = router
