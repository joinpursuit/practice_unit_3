const express = require('express');
const router = express.Router();
const {getAllPosts, getSinglePost} = require('../db/queries/postQueries.js')

router.get('/', getAllPosts);

router.get('/:id', getSinglePost)

module.exports = router;
