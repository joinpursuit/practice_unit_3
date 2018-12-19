const express = require('express')
const router = express.Router();
const {
  getAllLikes,
  getSingleLikeInfo,
  addLike,
  removeLike
} = require('../query/likesQ.js')
router.get('/', getAllLikes)
router.get('/post/:id', getSingleLikeInfo)
router.post('/post/:id',addLike)
router.delete('/post/:id', removeLike)
module.exports = router
