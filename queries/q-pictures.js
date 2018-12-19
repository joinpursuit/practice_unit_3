const { db } = require('./q-index.js')

const getPictures = (req, res, next) => {
  db.any('SELECT * FROM pictures')
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "got all pictures",
        body: data
      })
    })
    .catch(err => next(err));
}

const getAllPicsForAlbum = (req, res, next) => {
  db.any('SELECT * FROM pictures WHERE album_id=$1', parseInt(req.params.id))
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "got all pictures from one album",
        body: data
      })
    })
    .catch(err => next(err))
  }

const addPicture = (req, res, next) => {
  db.none('INSERT INTO pictures(img_url, album_id) VALUES(${img_url}, ${album_id})',req.body)
    .then(()=> {
      res.status(200).json({
        status: "success",
        message: "added one picture"
      })
    })
    .catch(err => next(err))
}
const deletePicture = (req, res, next) => {
  db.none('DELETE FROM pictures WHERE id=$1',parseInt(req.params.id))
    .then(()=> {
      res.status(200).json({
        status: "success",
        message: "deleted one picture"
      })
    })
    .catch(err => next(err))
}
module.exports = {  getPictures,
                    getAllPicsForAlbum,
                    addPicture,
                    deletePicture }
