const db = require('./index.js');

function getAllUsers(req, res, next) {
  db.any('SELECT * FROM users')
  .then((users) => {
    res.status(200).json({
      status: 'success',
      message: 'got all users',
      body: users
    })
  })
  .catch(err => next(err));
}

function getSingleUser(req, res, next) {
  db.one('SELECT * FROM users WHERE id=$1', [req.params.id])
  .then((user) => {
    res.status(200).json({
      status: 'success',
      message: 'got single user',
      body: user
    })
  })
  .catch(err => next(err));
}

function addUser(req, res, next) {
  req.body.age = +(req.body.age);
  db.none('INSERT INTO users(name, age) VALUES (${name}, ${age})', req.body)
  .then(()=> {
    res.status(200).json({
      status: 'success',
      message: 'created 1 user'
    })
  })
  .catch(err => next(err));
}

function deleteUser(req, res, next) {
  let userId = req.params.id;
  db.result('DELETE FROM users WHERE id=$1', [userId])
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'deleted 1 user',
      body: result
    })
  })
  .catch(err => next(err));
}
module.exports = { getAllUsers, getSingleUser, addUser, deleteUser };
