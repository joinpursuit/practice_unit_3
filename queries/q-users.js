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

module.exports = { getAllUsers }
