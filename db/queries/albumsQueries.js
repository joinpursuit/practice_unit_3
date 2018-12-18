const { db } = require("./index.js");

const getAllAlbums = (req, res, next) => {
  db.any("SELECT  * FROM albums")
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Received all albums",
        body: data
      });
    })
    .catch(err => next(err));
};

const createAlbum = (req, res, next) => {
  db.none(
    "INSERT INTO albums (user_id,album_name) VALUES(${user_id}, ${album_name})",
    req.body
  )
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Confirmed you have added a single album ",
        body: data
      });
    })
    .catch(err => next(err));
};

module.exports = {
  getAllAlbums,
  createAlbum
};
