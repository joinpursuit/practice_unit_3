// const pgp = require('pg-promise')({});
// const db = pgp('postgres://localhost:5432/facebook');
const { db } = require('./index.js')

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users').then(users => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got ALL users',
      body: users
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE id=$1;', [userId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got a SINGLE user.',
      body: data //data IS the single user already.
    })
  }).catch(err => {
    console.log("HI: ", err);
    next();
  })
}

const addSingleUser = (req, res, next) => {
  db.none(
    "INSERT INTO users(name, age) VALUES (${name}, ${age})", req.body
  ).then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'New user ADDED.',
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}

const deleteThisUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result('DELETE FROM users WHERE users.id=$1', [userId])
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: `You have removed ${result}.`,
      result: result
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}



module.exports = { getAllUsers, getSingleUser, addSingleUser, deleteThisUser };
