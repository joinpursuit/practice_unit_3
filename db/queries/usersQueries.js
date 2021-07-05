const { db } = require('./index.js')

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
  .then((data) => {
    res.status(200).json({
      status: 'success',
      body: data,
      message: 'You have ALL USERS!'
    })
  })
  .catch(err => {
    return next(err)
  })
}

const getSingleUser = (req, res, next) => {
  let usersId = parseInt(req.params.id) //could also use Number()
  db.one('SELECT * FROM users WHERE id=$1',  usersId) //could also use id = ${id} and then { id: usersId}
    .then((data) => {
      res.status(200).json({
        status: 'success',
        body: data,
        message: 'You have received One User!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const deleteUser = (req, res, next) => {
  let usersId = parseInt(req.params.id)
  db.none('DELETE FROM users WHERE id=$1', usersId)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'You have deleted a user!',
      })
    })
    .catch(err => {
      return next(err)
    })
}

const createUser = (req, res, next) => {
  // const user = req.body;
  // user.age = Number(user.age)
  db.none('INSERT INTO users(username, age) VALUES(${username}, ${age})', req.body)
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
