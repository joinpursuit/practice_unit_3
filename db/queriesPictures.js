// const pgp = require('pg-promise')({});
// const db = pgp('postgres://localhost:5432/facebook');
const { db } = require('./index.js')

const getAllPictures = (req, res, next) => {
  db.any('SELECT * FROM pictures').then(pictures => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got ALL pictures',
      body: pictures
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}

const getAllPicturesForSingleAlbum = (req, res, next) => {
  let albumId = parseInt(req.params.id);
  db.any('SELECT * FROM pictures JOIN albums ON pictures.user_id=albums.user_id WHERE pictures.album_id=$1;', [albumId])
  .then(data => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got ALL PICTURES for this ALBUM.',
      body: data
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}

const addPictureForSingleAlbum = (req, res, next) => {
  db.none(
    // "INSERT INTO pictures (album_id, url) VALUES ( ${albumId}, ${newUrl})", {

    "INSERT INTO pictures(user_id, album_id, url) VALUES (${userId}, ${albumId}, ${newUrl})", {
      userId: req.body.user_id,
      albumId: req.params.id,
      newUrl: req.body.url
    }
  ).then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'Posted new Picture.',
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}
// user_id: 3
// album_id: 1
// url:  https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500


const deleteThisPicture = (req, res, next) => {
  let pictureId = parseInt(req.params.id);
  db.result('DELETE FROM pictures WHERE pictures.id=$1', [pictureId])
  .then(result => {
    res.status(200)
    .json({
      status: 'success',
      message: `You have removed a PICTURE.`,
      result: result
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}



module.exports = { getAllPictures, getAllPicturesForSingleAlbum, addPictureForSingleAlbum, deleteThisPicture };
