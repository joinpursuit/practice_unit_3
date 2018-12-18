const { db } = require("./index.js");

const getAllPictures = (req, res, next) => {
  db.any("SELECT  * FROM pictures")
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Received all pictures",
        body: data
      });
    })
    .catch(err => next(err));
};

const getpictureAlbumId = (req, res, next) => {
  let pictureId = parseInt(req.params.id);
  db.any("SELECT  url FROM pictures WHERE album_id = $1", pictureId)
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Received all pictures",
        body: data
      });
    })
    .catch(err => next(err));
};

const addSinglePicture = (req, res, next) => {
  db.none("INSERT INTO pictures (album_id, url) VALUES(${album_id}, ${url})", {
    id: parseInt(req.params.id),
    album_id: parseInt(req.body.album_id),
    url: req.body.url
  })
    .then(data => {
      res.status(200).json({
        status: "success",
        message: "Confirmed you have added a single picture ",
        body: data
      });
    })
    .catch(err => next(err));
};

const deletePicture = (req,res,next)=>{
  let pictureId = parseInt(req.params.id);
  db.result('DELETE FROM pictures WHERE id=$1',pictureId)
  .then(result => {
    res.status(200)
      .json({
        status: 'success',
        message: 'Removed a picture',
        result: result
      })
  })
  .catch(err => next(err))
}

module.exports = {
  getAllPictures,
  getpictureAlbumId,
  addSinglePicture,
  deletePicture
};
