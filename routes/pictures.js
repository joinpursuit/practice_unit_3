const express = require('express')
const router = express.Router()
const { getAllPictures, getSinglePicture } = require('../db/queries/picturesQueries.js')

router.get('/', getAllPictures)
router.get('/albums/:id', getSinglePicture)
// router.post('/', addPicture)
// router.delete('/:id', deletePicture)

module.exports = router
