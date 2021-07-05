const express = require('express');
const router = express.Router();
const { getAllUsers, getSingleUser, deleteUser, createUser } = require('../db/queries/usersQueries.js')

router.get('/', getAllUsers)
router.get('/:id', getSingleUser)
router.post('/', createUser)
router.delete('/:id', deleteUser)

module.exports = router
