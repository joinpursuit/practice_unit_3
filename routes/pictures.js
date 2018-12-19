let express = require('express')
let router = express.Router();
const db = require('../db/queriesPictures');

router.get('/', db.getAllPictures);
router.get('/albums/:id', db.getAllPicturesForSingleAlbum);
//
router.post('/albums/:id', db.addPictureForSingleAlbum);
//
router.delete('/:id', db.deleteThisPicture);




module.exports = router;
