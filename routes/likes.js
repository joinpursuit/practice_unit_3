const express = require('express');
const router = express.Router();
const {
  getAllLikes,
  getSinglePostLikes,
  addLike,
  deleteLike,
} = require('../db/queries/likes');

router.get('/', getAllLikes);
router.get('/:id', getSinglePostLikes);
router.post('/', addLike);
router.delete('/:id', deleteLike);

module.exports = router;
