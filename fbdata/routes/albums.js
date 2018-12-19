const express = require('express');
const router = express.Router();
const {
  getAllAlbums,
  addAlbum
} = require('../db/queries/albumqueries.js');

// - GET `/albums` - Get all albums.
router.get('/', getAllAlbums);
//
// - POST `/albums` - Add new album.
router.post('/', addAlbum);

module.exports = router;