const { db } = require("./index.js");
// middleware functions
const getAllUsers = (req, res, next) => {
  db.any("SELECT * FROM users")
    .then(data => {
      res.status(200);
      res.json({
        status: "success",
        message: "got a all users",
        body: data
      });
    })
    .catch(err => next(err));
};

const getSingleUser = (req, res, next) => {
  // the number entered in the wildcard for id. that way when choosing from one of the database
  // we return a single user.
  let userId = parseInt(req.params.id);
  db.one("SELECT * FROM users WHERE id  =$1", userId)
    .then(data => {
      res.status(200);
      res.json({
        status: "success",
        message: "got a single user",
        body: data
      });
    })
    .catch(err => next(err));
};

const createSingleUser = (req, res, next) => {
  db.none("INSERT INTO users(name,age) VALUES(${name},${age})", req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: " Created a single user"
      });
    })
    .catch(err => next(err));
};

const deleteUser = (req, res, next) => {
  let userId = parseInt(req.params.id);
  db.result("DELETE  FROM users WHERE id=$1", userId)
    .then(result => {
      res.status(200).json({
        status: "success",
        message: "You deleted the user",
        body: result
      });
    })
    .catch(err => next(err));
};
module.exports = { getAllUsers, getSingleUser, createSingleUser,deleteUser };
