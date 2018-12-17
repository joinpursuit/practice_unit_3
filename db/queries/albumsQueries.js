const { db } = require('./index.js');

const allAlbums = (req, res, next) => {
  db.any('SELECT * FROM albums')
  .then(data => {
    res.status(200)
    .json({
      status: 'status',
      data: data,
      message: 'this is all your albums'
    })
  })
  .catch(err => next(err));
}

const newAlbums = (req, res, next) => {
  req.body.user_id = req.body.user_id ? parseInt(req.body.user_id) : null;
  db.none('INSERT INTO albums(user_id) VALUES(${user_id})', req.body)
  .then(() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'you added a new album'
    })
  })
  .catch(err => next(err));
}

module.exports = {allAlbums, newAlbums}
