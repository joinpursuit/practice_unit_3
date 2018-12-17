// 1. create an instance of express
const express = require("express");
// 2. create express.router
const router = express.Router();
// 3.
const { getAllUsers,getSingleUser,createSingleUser,deleteUser } = require("../db/queries/usersQueries.js");
//4
router.get("/", getAllUsers);
router.get("/:id", getSingleUser)
router.post("/",createSingleUser)
router.delete("/:id",deleteUser)

module.exports = router;
