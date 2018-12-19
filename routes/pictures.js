const express = require('express');
const router = express.Router();
const { getPictures,
        getAllPicsForAlbum,
        addPicture,
        deletePicture} = require('../queries/q-pictures.js');

router.get('/', getPictures);
router.get('/albums/:id', getAllPicsForAlbum);
router.post('/', addPicture);
router.delete('/:id', deletePicture);

module.exports = router
