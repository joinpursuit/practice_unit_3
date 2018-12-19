const { db } = require('./q-index.js');

const getAllUsers = (req, res, next) => {
  db.any('SELECT * FROM users')
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Received all users",
        body: data
      })
    })
    .catch(err => {
      return next(err);
    });
};

const getSingleUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.one('SELECT * FROM users WHERE users.id=$1', userId)
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Received one user",
        body: data
      })
    })
    .catch(err => {
      return next(err);
    });
}

const addSingleUser = (req, res, next) => { // POST
  db.none('INSERT INTO users(username, instrument) VALUES(${username}, ${instrument})', req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "added one new user!"
      })
    })
    .catch(err => next(err));
}

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result("DELETE FROM users WHERE id=$1", userId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "Removed politely a user",
        result: result
      })
    })
    .catch(err => next(err));

}
module.exports = {  getAllUsers,
                    getSingleUser,
                    addSingleUser,
                    deleteUser
                  }
