let express = require('express')
let router = express.Router();
const db = require('../db/queriesUsers');

router.get('/', db.getAllUsers);
router.get('/:id', db.getSingleUser);
router.post('/', db.addSingleUser);
router.delete('/:id', db.deleteThisUser);




module.exports = router;
