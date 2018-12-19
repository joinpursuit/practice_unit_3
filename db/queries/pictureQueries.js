const { db } = require('./index.js');

const allPictures = (req, res, next) => {
  db.any('SELECT * FROM pictures')
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this all the pictures'
    })
  })
  .catch(err => next(err));
}

const albumsPics = (req, res, next) => {
  let albumId = parseInt(req.params.id)
  db.any('SELECT * FROM albums JOIN pictures ON pictures.album_id = albums.id WHERE albums.id=$1', albumId)
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      data: data,
      message: 'this is all the pics in this album'
    })
  })
  .catch(err => next(err));
}

const postPicture = (req, res, next) => {
  db.none('INSERT INTO pictures(album_id, url) VALUES(${album_id}, ${url})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you added a picture'
    })
  })
  .catch(err => next(err));
}

const deletePic = (req, res, next) => {
  let pictureId = parseInt(req.params.id)
  db.result('DELETE FROM pictures WHERE id=$1', pictureId)
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you deleted this picture',
      result: result
    })
  })
  .catch(err => next(err));
}


module.exports = {allPictures, albumsPics, postPicture, deletePic}
