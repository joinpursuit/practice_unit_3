const { db } = require('./q-index.js')

const getAlbums = (req, res, next) => {
  db.any('SELECT * FROM albums')
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "got all albums",
        body: data
      })
    })
    .catch(err => next(err));
}

const getOneAlbum = (req, res, next) => {
  db.one('SELECT * FROM albums WHERE id=$1', parseInt(req.params.id))
    .then((data) => {
      res.status(200).json({
        status: "success",
        message: "got one album",
        body: data
      })
    })
    .catch(err => next(err))
}

const addAlbum = (req, res, next) => {
  db.none('INSERT INTO albums(user_id) VALUES(${user_id})',req.body)
    .then(()=> {
      res.status(200).json({
        status: "success",
        message: "add one album"
      })
    })
    .catch(err => next(err))
}
module.exports = {  getAlbums,
                    getOneAlbum,
                    addAlbum }
