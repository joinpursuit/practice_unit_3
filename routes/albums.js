let express = require('express')
let router = express.Router();
const db = require('../db/queriesAlbums');

router.get('/', db.getAllAlbums);
router.post('/', db.addNewAlbum);





module.exports = router;
