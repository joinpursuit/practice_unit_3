const { db } = require('./index.js')

const getAllAlbums = (req, res, next) => {
  db.any('SELECT * FROM albums')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        body: data,
        message: 'here are all albums of users'
      })
    })
    .catch(err => {
      return next(err)
    })
}

const addAlbum = (req, res, next) => {
  db.none('INSERT INTO albums(users_id) VALUES(${users_id})', req.body)
    .then(() => {
      res.status(200).json({
        status: 'success',
        message: 'you have added an album'
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllAlbums, addAlbum }
