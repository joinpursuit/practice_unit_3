const express = require('express');
const router = express.Router();
const { getAllLikes, likesPerPost, addALike, deleteALike } = require('../db/queries/likesQueries.js');

router.get('/', getAllLikes);
router.get('/posts/:id', likesPerPost);
router.post('/posts/:id', addALike);
router.delete('/:id', deleteALike);

module.exports = router;
