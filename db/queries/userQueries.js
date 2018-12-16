const { db } = require('./index.js')

const getAllusers = (req, res, next) => {
  db.any('SELECT * FROM users')
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this is all the users'
    })
  })
  .catch(err => next(err));
}

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE id=$1', userId)
  .then((data) => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this is ONE user'
    })
  })
  .catch(err => next(err));
}

const addUser = (req, res, next) => {
  db.none('INSERT INTO users(name, age) VALUES(${name}, ${age})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'added a new user'
    })
  })
  .catch(err => next(err));
}

const editUser = (req, res, next) => {
  db.none('UPDATE users SET name=${name}, age=${age} WHERE id=${id}', {
    id: parseInt(req.params.id),
    name: req.body.name,
    age: req.body.age
  })
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you edited THIS user'
    })
  })
  .catch(err => next(err));
}

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE id=$1', userId)
  .then((result) => {
    res.status(200)
    .json({
      status: 'success',
      message: 'goodbye user',
      result: result
    })
  })
  .catch(err => next(err));
}

module.exports = {getAllusers, getSingleUser, addUser, editUser, deleteUser}
