const
  db = require('./index.js');

// - GET `/albums` - Get all albums.
const getAllAlbums = (req, res, next) => {
  db.any('SELECT * FROM albums')
    .then(data => {
      res.status(200)
        .json({
          status: "Success!",
          message: "Got All Albums",
          body: data
        });
    })
    .catch(err => {
      next(err);
    });
};
// - POST `/albums` - Add new album.
const addAlbum = (req, res, next) => {
  req.body.user_id = parseInt(req.body.user_id);
  req.body.post_id = parseInt(req.body.post_id);
  db.none('INSERT INTO albums(user_id,album_name) VALUES(${user_id}, ${album_name})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: "success",
          message: "Added an Album"
        })
    })
    .catch(err => {
      return next(err);
    })
}

module.exports = {
  getAllAlbums,
  addAlbum
}