const { db } = require('./index.js')

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
  .then((data) => {
    res.status(200).json({
      status: 'success',
      data: data,
      message: 'You have ALL USERS!'
    })
  })
  .catch(err => {
    return next(err)
  })
}

const getSingleUser = (req, res, next) => {
  let usersId = parseInt(req.params.id)
  db.one('SELECT * FROM users WHERE id=$1', usersId)
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'You have received One User!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const deleteUser = (req, res, next) => {
  let usersId = parseInt(req.params.id)
  db.result('DELETE FROM users WHERE id=$1', usersId)
    .then(result => {
      res.status(200).json({
        status: 'success',
        message: 'You have deleted a user!',
        result: result
      })
    })
    .catch(err => {
      return next(err)
    })
}

const createUser = (req, res, next) => {
  db.none('INSERT INTO users(username, email) VALUES(${username}, ${email})', req.body)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'Welcome new user!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllUsers, getSingleUser, deleteUser, createUser }
