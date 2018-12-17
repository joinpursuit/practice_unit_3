const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => res.send("THIS IS PICTURE ON PICTURE ROUTE"))

module.exports = router