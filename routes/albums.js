const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => res.send("THIS IS albums ON albums ROUTE"))

module.exports = router