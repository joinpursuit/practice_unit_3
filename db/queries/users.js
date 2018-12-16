const {
  db,
} = require('./index');

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got ALL USERS',
          body: data,
        });
    }).catch((err) => (next(err)));
};

const getSingleUser = (req, res, next) => {
  let userId = req.params.id;
  db.one('SELECT * FROM users WHERE id=$1', [userId])
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got SINGLE USER',
          body: data,
        });
    }).catch((err) => (next(err)));
};

const createUser = (req, res, next) => {
  db.none('INSERT INTO users(user_name, user_email) VALUES (${userName}, ${userEmail})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'create a new user',
          body: req.body,
        });
    })
    .catch((err) => (next(err)));
};

const deleteUser = (req, res, next) => {
  let userId = req.params.id;
  db.none('DELETE FROM users where id=$1', userId)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'deleted user',
          body: userId,
        });
    }).catch((err) => (next(err)));
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
};
