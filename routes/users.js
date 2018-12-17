const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../queries/q-users.js');

router.get('/', getAllUsers);
module.exports = router;
