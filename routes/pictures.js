const express = require('express');
const router = express.Router();
const {getAllPictures,getpictureAlbumId,addSinglePicture,deletePicture} = require('../db/queries/pictureQueries.js')

router.get('/',getAllPictures);
router.get('/albums/:id',getpictureAlbumId);
router.post('/',addSinglePicture)
router.delete('/:id',deletePicture)
module.exports  = router;
