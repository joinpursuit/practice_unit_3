const db = require('../db/index.js').db

const getAllUsers = (req,res,next) => {
  db.any('SELECT * from users').then((data)=> {
    res.status(200).json({
      status: '200 - Success',
      data: data,
      message: 'All users for you.'
      
    })
  }).catch(err =>{
    return next(err)
  })
}


function getSingleUser(req, res, next) {
  let requestedID = parseInt(req.params.id)
  db.one('SELECT first_name, last_name, email FROM users WHERE id=$1', requestedID).then(
    data => {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Single User Info"
      })
    }
  )}

const addAUser = (req, res) => {
  db.none('INSERT INTO users(first_name,last_name,email) VALUES (${first_name}, ${last_name}, ${email})',req.body).then(()=> {
    res.status(200).json({
      status: "success",
      message: 'You added a user'
    })
  }).catch(err =>{
    return err
  })
}




module.exports = {
  getAllUsers,
  getSingleUser,
  addAUser
}


