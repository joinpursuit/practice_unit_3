const express = require('express');
const router = express.Router();
const {allPictures, albumsPics, postPicture, deletePic} = require('../db/queries/pictureQueries.js')

router.get('/', allPictures);

router.get('/albums/:id', albumsPics);

router.post('/', postPicture);

router.delete('/:id', deletePic)

module.exports = router;
