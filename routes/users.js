const express = require('express');
const router = express.Router();
const {getAllusers, getSingleUser, addUser, editUser, deleteUser} = require('../db/queries/userQueries.js');

router.get('/', getAllusers);

router.get('/:id', getSingleUser);

router.post('/', addUser);

router.put('/:id', editUser)

router.delete('/:id', deleteUser)


module.exports = router;
