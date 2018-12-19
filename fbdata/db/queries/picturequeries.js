const db = require('./index.js');

// - GET `/pictures` - Get all pictures.
const getAllPictures = (req, res, next) => {
  db.any('SELECT * FROM pictures')
    .then(data => {
      res.status(200).json({
        status: "Success",
        message: "Got All Pictures",
        body: data
      })
    })
    .catch(err => {
      next(err)
    })
}
// - GET `/pictures/albums/:id` - Get all pictures for a single album.
const getAllPicturesFromAlbum = (req, res, next) => {
  let albumId = req.params.id;
  db.any('SELECT pictures.* FROM pictures WHERE album_id=$1', albumId)
    .then((data) => {
      res.status(200)
        .json({
          status: 'Success',
          message: 'You got them pics from Album,fam',
          body: data
        })
    })
    .catch(err => {
      next(err)
    })
}
// - POST `/pictures` - Add single picture.
const addPicture = (req, res, next) => {
  db.none('INSERT INTO pictures (user_id,album_id,url) VALUES(${user_id},${album_id},${url})', {
      user_id: req.body.user_id,
      album_id: req.body.album_id,
      url: req.body.url
    }).then(() => {
      res.status(200)
        .json({
          status: 'Success',
          message: 'Added a Picture',
          body: req.body
        })
    })
    .catch(err => {
      next(err)
    })
};

// - DELETE `/pictures/:id` - Delete single picture.
const deletePicture = (req, res, next) => {
  let picId = parseInt(req.params.id);
  db.result('DELETE FROM pictures  WHERE id=$1', picId)
    .then(result => {
      res.status(200)
        .json({
          status: "Success",
          message: "Gratz! You deleted a memory!",
          result: result

        });
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = {
  getAllPictures,
  getAllPicturesFromAlbum,
  addPicture,
  deletePicture
}