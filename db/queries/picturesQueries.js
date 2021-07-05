const { db } = require('./index.js')

const getAllPictures = (req, res, next) => {
  db.any('SELECT * FROM pictures')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        body: data,
        message: 'You have received all pictures!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getPictureFromAlbum = (req, res, next) => {
  let albumId = parseInt(req.params.id)
  db.any('SELECT photo_url FROM pictures JOIN albums ON (albums_id = albums.users_id) WHERE albums_id = $1', albumId)
    .then((data) => {
      res.status(200).json({
        status: 'success',
        body: data,
        message: 'you have all pictures from this album!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addPicture = (req, res, next) => {
  db.none('INSERT INTO pictures(albums_id, photo_url) VALUES(${albums_id}, ${photo_url})', {
    albums_id: req.body.albums_id,
    photo_url: req.body.photo_url
  })
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have added a picture!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const deletePicture = (req, res, next) => {
  let pictureId = parseInt(req.params.id)
  db.result('DELETE FROM pictures WHERE id=$1', pictureId)
    .then(result => {
      res.status(200).json({
        status: 'success',
        result: result,
        message: 'you have deleted a picture!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllPictures, getPictureFromAlbum, addPicture, deletePicture }
