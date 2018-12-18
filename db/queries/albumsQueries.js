const { db } = require('./index.js')

const getAllAlbums = (req, res, next) => {
  db.any('SELECT * FROM albums')
    .then((data) => {
      res.status(200).json({
        status: 'success',
        data: data, 
        message: 'here are all albums of users'
      })
    })
    .catch(err => {
      return next(err)
    })
}

module.exports = { getAllAlbums }
