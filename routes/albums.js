const express = require('express');
const router = express.Router();
const {allAlbums, newAlbums} = require('../db/queries/albumsQueries.js');

router.get('/', allAlbums);

router.post('/', newAlbums)

module.exports = router;
