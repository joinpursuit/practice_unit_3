const express = require('express');
const router = express.Router();
const { getAllUsers,
        getSingleUser,
        addSingleUser,
        deleteUser } = require('../queries/q-users.js');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', addSingleUser);
router.delete('/:id', deleteUser);

module.exports = router;
