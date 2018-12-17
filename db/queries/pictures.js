const {
  db,
} = require('./index');

const getAllPictures = (req, res, next) => {
  db.any('SELECT * FROM pictures')
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got ALL PICTURES',
          body: data,
        });
    }).catch((err) => (next(err)));
};

const getAlbumPictures = (req, res, next) => {
  db.any('SELECT * FROM pictures WHERE id=$1', req.params.id)
    .then((data) => {
      res.status(200)
        .json({
          status: 'success',
          message: 'got ALL ALBUM PICTURES',
          body: data,
        });
    }).catch((err) => (next(err)));
};

const addPicture = (req, res, next) => {
  db.none('INSERT INTO pictures (picture_user_id, picture_url, picture_album_id) VALUES (${userId}, ${pictureUrl}, ${pictureAlbum})', {
    userId: req.body.userId,
    pictureUrl: req.body.pictureUrl,
    pictureAlbum: req.body.pictureAlbum || null,
  }).then(() => {
    res.status(200)
      .json({
        status: 'success',
        message: 'added PICTURE',
        body: req.body,
      });
  }).catch((err) => (next(err)));
};

const deletePicture = (req, res, next) => {
  db.none('DELETE FROM pictures WHERE id=$1', req.params.id)
    .then(() => {
      res.status(200)
        .json({
          status: 'success',
          message: 'delete single PICTURE',
          body: req.params.id,
        });
    }).catch((err) => (next(err)));
};

module.exports = {
  getAllPictures,
  getAlbumPictures,
  addPicture,
  deletePicture,
};
