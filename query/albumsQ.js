const db = require('../db/index.js').db

const getAllAlbums = (req,res,next) => {
  db.any('SELECT * from albums').then(data => {
    res.status(200).json({
      status: 200,
      message: "complete",
      data : data
    })
  }).catch(err => {
    return next(err)
  })
}


const addAlbum = (req, res, next) => {
  db.none('INSERT INTO albums (user_id) VALUES (${user_id})',req.body).then( () => {
    res.status(200).json({
      status: 200,
      message: "complete"
    })
  }).catch(err => {
    return next(err)
  })
}

module.exports = {
getAllAlbums,
addAlbum
}