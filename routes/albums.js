const express = require('express');
const router = express.Router();
const { getAlbums,
        getOneAlbum,
        addAlbum } = require('../queries/q-albums.js');

router.get('/', getAlbums);
router.get('/:id', getOneAlbum);
router.post('/', addAlbum);

module.exports = router
