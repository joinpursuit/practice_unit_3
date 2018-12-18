const express = require('express')
const router = express.Router()
const { getAllLikes, getLikeForSinglePost } = require('../db/queries/likesQueries.js')

router.get('/', getAllLikes)
router.get('/posts/:id', getLikeForSinglePost)
// router.post('/', addLike)
// router.delete('/:id', deleteLike)

module.exports = router
