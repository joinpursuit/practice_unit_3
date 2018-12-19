const express = require('express');
const router = express.Router();
const { getAllUsers, getSingleUser, addUser, deleteUser } = require('../db/queries/usersQueries.js');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', addUser);
router.delete('/:id', deleteUser);

module.exports = router;
