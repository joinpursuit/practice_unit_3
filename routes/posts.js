let express = require('express')
let router = express.Router();
const db = require('../db/queriesPosts');

router.get('/', db.getAllPosts);
router.get('/:id', db.getSinglePost);
router.post('/', db.addSinglePost);
router.patch('/:id', db.editSinglePost);
router.delete('/:id', db.deleteSinglePost);


module.exports = router;
