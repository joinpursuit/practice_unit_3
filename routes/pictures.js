let express = require('express')
let router = express.Router();
const db = require('../db/queriesPictures');

router.get('/', db.getAllPictures);
router.get('/albums/:id', db.getAllPicturesForSingleAlbum);
router.post('/', db.addSinglePicture);
router.delete('/:id', db.deleteThisPicture);




module.exports = router;
