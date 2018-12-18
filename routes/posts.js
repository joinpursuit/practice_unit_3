const express = require('express')
const router = express.Router();
const {
  getAllPosts,
  getSinglePost,
  addApost,
  editPost,
  popAPost
} = require('../query/postQ.js')

router.get('/', getAllPosts)
router.get('/:id',getSinglePost)
router.post('/',addApost)
router.patch('/:id',editPost)
router.delete('/:id',popAPost)

module.exports = router