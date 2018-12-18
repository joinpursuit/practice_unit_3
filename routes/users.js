const express = require('express')
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  addAUser,
  popAUser
} = require('../query/usersQ.js')


router.get('/', getAllUsers)
router.get('/:id',getSingleUser)
router.post('/',addAUser)
router.delete('/:id',popAUser)







module.exports = router