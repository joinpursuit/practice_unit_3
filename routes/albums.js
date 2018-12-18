const express = require('express')
const router = express.Router()
const { getAllAlbums } = require('../db/queries/albumsQueries.js')

router.get('/', getAllAlbums)

module.exports = router
