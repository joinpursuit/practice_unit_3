const db = require('../db/index.js').db

const getAllpictures = (req,res,next)=> 
{
db.any('SELECT * FROM pictures').then(data => {
  res.status(200).json({
    status: 200,
    message: 'All Pictures',
    data : data
  })
}).catch(err => {
  return next(err)
})
}

const getAlbumsPictures = (req,res,next) => {
  db.any('SELECT * from pictures WHERE album_id = $1',[req.params.id]).then(data => {
    res.status(200).json({
      status: 200,
      message: "ALL Pictures",
      data: data
    })
  }).catch(err => {
    return next(err)
  })
}

const postPicture = (req,res,next) => {
  db.none('INSERT into pictures (album_id, url) VALUES (${params},${url})',{
    url : req.body.url,
    params: req.params.id
  }).then(()=>{
    res.status(200).json({
      status: 200,
      message: "url imported",
    })
  }).catch(err=> {
    return next(err)
  })
}

const delPicture = (req,res,next) =>{
  db.none('DELETE FROM pictures WHERE id=$1',[req.params.id]).then(()=> {
    res.status(200).json({
      status:200,
      message: "delete a picture"
    })
  }).catch(err => {
    return next(err)
  })
}

module.exports = {
getAllpictures,
getAlbumsPictures,
postPicture,
delPicture

}