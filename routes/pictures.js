const express = require('express');
const router = express.Router();
const { getAllPictures, getAllPicturesPerAlbum, addPicture, deletePicture } = require('../db/queries/picturesQueries.js');

router.get('/', getAllPictures);
router.get('/albums/:id', getAllPicturesPerAlbum);
router.post('/albums/:id', addPicture);
router.delete('/:id', deletePicture);

module.exports = router;
