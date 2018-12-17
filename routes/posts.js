const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => res.send("THIS IS POST ON POST ROUTE"))

module.exports = router