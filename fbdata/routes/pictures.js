const express = require('express');
const router = express.Router();
const {
  getAllPictures,
  getAllPicturesFromAlbum,
  addPicture,
  deletePicture
} = require('../db/queries/picturequeries.js');

// - GET `/pictures` - Get all pictures.
router.get('/', getAllPictures);

// - GET `/pictures/albums/:id` - Get all pictures for a single album.
router.get('/albums/:id', getAllPicturesFromAlbum);


// - POST `/pictures` - Add single picture.
router.post('/', addPicture);


// - DELETE `/pictures/:id` - Delete single picture.
router.delete('/:id', deletePicture);

module.exports = router;