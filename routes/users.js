const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
} = require('../db/queries/users');

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;
