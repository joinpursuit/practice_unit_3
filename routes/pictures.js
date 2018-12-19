const express = require('express')
const router = express.Router();
const {getAllpictures, getAlbumsPictures,
postPicture,delPicture} = require('../query/picturesQ.js')

router.get('/',getAllpictures)
router.get('/albums/:id', getAlbumsPictures)
router.post('/albums/:id', postPicture)

router.delete('/albums/:id',delPicture)

module.exports = router