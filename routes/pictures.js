const express = require('express');
const router = express.Router();
const {
  getAllPictures,
  getAlbumPictures,
  addPicture,
  deletePicture,
} = require('../db/queries/pictures');

router.get('/', getAllPictures);
router.get('/albums/:id', getAlbumPictures);
router.post('/', addPicture);
router.delete('/:id', deletePicture);

module.exports = router;
