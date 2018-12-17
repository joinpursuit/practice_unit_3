const express = require('express')
const router = express.Router();
const {
  getAllUsers,
  getSingleUser,
  addAUser

} = require('../query/users.js')


router.get('/', getAllUsers)
router.get('/:id',getSingleUser)
router.post('/',addAUser)

router.post('id')







module.exports = router