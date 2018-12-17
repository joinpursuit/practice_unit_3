const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => res.send("THIS IS COMMENTS ON COMMETS ROUTE"))

module.exports = router