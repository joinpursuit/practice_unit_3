const express = require('express');
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser
} = require('../DB/queries/userqueries.js');


// Get all users,
router.get('/', getAllUsers);

// Get single user.
router.get('/:id', getSingleUser);

//create
router.post('/', createUser);

// // Delete a user
router.delete('/:id', deleteUser);



module.exports = router;