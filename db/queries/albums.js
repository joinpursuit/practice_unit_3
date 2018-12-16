const {
  db,
} = require('./index');

const getAllAlbums = (req, res, next) => {
  db.any('SELECT * FROM albums')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got ALL ALBUMS',
          body: data,
        });
    }).catch((err) => (next(err)));
};

const createAlbum = (req, res, next) => {
  db.none('INSERT INTO albums (album_user_id, album_name) VALUES (${userId}, ${name})', req.body)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'added album',
          body: req.body,
        });
    }).catch((err) => (next(err)));
};

module.exports = {
  getAllAlbums,
  createAlbum,
};
