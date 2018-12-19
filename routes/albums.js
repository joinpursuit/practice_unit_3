const express = require('express')
const router = express.Router();
const {getAllAlbums,
addAlbum
} = require('../query/albumsQ.js')


router.get('/', getAllAlbums)
router.post('/', addAlbum)

module.exports = router