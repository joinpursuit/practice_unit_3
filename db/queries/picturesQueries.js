const { db } = require('./index.js')

const getAllPictures = (req, res, next) => {
  db.any('SELECT * FROM pictures')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'You have received all pictures!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const getSinglePicture = (req, res, next) => {
  let pictureId = parseInt(req.params.id)
  db.one('SELECT * FROM pictures WHERE id=$1', pictureId)
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data,
        message: 'you have a single picture!'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addPicture = (req, res, next) => {
  db.none('INSERT INTO pictures(pictures_id, photo_url) VALUES(${pictures_id}, ${photo_url})', req.body)
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

module.exports = { getAllPictures, getSinglePicture, addPicture, deletePicture }
