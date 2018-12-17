const express = require('express')
const router = express.Router();

router.get('/', (req,res,next) => res.send("THIS IS USER ON USER ROUTE"))





module.exports = router