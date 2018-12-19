const
  db = require('./index.js');

//gets all users;
const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then(data => {
      res.status(200).json({
        status: "Success!",
        message: "Got All Users",
        body: data
      })
    })
    .catch(err => {
      return next(err);
    });
}

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE id =$1', [userId])
    .then(data => {
      res.status(200)
        .json({
          status: "Success!",
          message: "Got A Single User",
          body: data
        })
    })
    .catch(err => {
      return next(err)
    })
}

const createUser = (req, res, next) => {
  db.none('INSERT INTO users (name, age) VALUES(${name}, ${age})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: "Success",
          message: "You have created a new user!"
        })
    })
    .catch(err => {
      next(err)
    })
}

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE id=$1', userId)
    .then(result => {
      res.status(200)
        .json({
          status: "Success",
          message: "User has been deleted.. :'("
        })
    })
    .catch(err => {
      return next(err)
    });
}

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser
}