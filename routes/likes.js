const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => res.send("THIS IS LIKE ON LIKE ROUTE"))

module.exports = router