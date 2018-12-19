const db = require('./index.js');

function getAllPictures(req, res, next) {
  db.any('SELECT * FROM pictures')
  .then(pictures => {
    res.status(200).json({
      status: 'success',
      message: 'Got all pictures',
      body: pictures
    })
  })
  .catch(err => next(err));
}

function getAllPicturesPerAlbum(req, res, next) {
  let albumId = +(req.params.id);
  db.any('SELECT * FROM pictures WHERE album_id=$1', [albumId])
  .then(pictures => {
    res.status(200).json({
      status: 'success',
      message: 'got all pictures from a single album',
      body: pictures
    })
  })
  .catch(err => next(err));
}

function addPicture(req, res, next) {
  req.body.album_id = +(req.params.id);
  db.none('INSERT INTO pictures(album_id, url) VALUES(${album_id}, ${url})', req.body)
  .then(()=> {
    res.status(200).json({
      status: 'success',
      message: 'you added a picture'
    })
  })
  .catch(err => next(err));
}

function deletePicture(req, res, next) {
  let picId = req.params.id;
  db.result('DELETE FROM pictures WHERE id=$1', [picId])
  .then(result => {
    res.status(200).json({
      status: 'success',
      message: 'deleted a picture',
      body: result
    })
  })
  .catch(err => next(err));
}

module.exports = { getAllPictures, getAllPicturesPerAlbum, addPicture, deletePicture };
