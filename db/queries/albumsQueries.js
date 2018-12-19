const db = require('./index.js');

function getAllAlbums(req, res, next) {
  // console.log(req);
  db.any('SELECT * FROM albums')
  .then(albums => {
    // console.log(albums);
    res.status(200).json({
      status: 'success',
      message: 'get all albums',
      body: albums
    })
  })
  .catch(err => next(err));
}

function addAlbum(req, res, next) {
  req.body.user_id = +(req.body.user_id);
  db.none('INSERT INTO albums(user_id) VALUES(${user_id})', req.body)
  .then(()=> {
    res.status(200).json({
      status: 'success',
      message: 'added an album'
    })
  })
  .catch(err => next(err));
}

module.exports = { getAllAlbums, addAlbum };
