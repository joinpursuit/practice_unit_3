const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost:5432/facebook');

const getAllAlbums = (req, res, next) => {
  db.any('SELECT * FROM albums')
  .then(allAlbums => {
    res.status(200)
    .json({
      status: 'success',
      message: 'got ALL albums',
      body: allAlbums
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}


const addNewAlbum = (req, res, next) => {
  db.none(
    'INSERT INTO albums (user_id, title) VALUES (${userId}, ${newTitle})', {
    userId: req.body.user_id,
    newTitle: req.body.title
    }
  ).then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'POSTED new album.'
    })
  }).catch(err => {
    console.log(err);
    next();
  })
}
//POST. select Body option on top:
// user_id: 3
// title: cats sleeping warmly




module.exports = { getAllAlbums, addNewAlbum }
