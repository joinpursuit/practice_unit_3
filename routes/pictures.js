const express = require('express')
const router = express.Router();
const {getAllCommments} = require('../query/commentsQ.js')

router.get('/',getAllCommments)

module.exports = router