# Practice Exam - Full RESTful API

Create a full RESTful API using the Facebook database structure you created in the previous assignment, including an Express app and a Postgres database. This app should have the following routes, with corresponding SQL statements:

- **Users**
  - GET `/users` - Get all users.
  - GET `/users/:id` - Get single user.
  - POST `/users` - Add single user.
  - DELETE `/users/:id` - Delete user with the corresponding `id`.
- **Posts**
  - GET `/posts` - Get all posts.
  - GET `/posts/:id` - Get single post.
  - POST `/posts` - Add single post.
  - PATCH `/posts/:id` - Edit single post.
  - DELETE `/posts/:id` - Delete single post.
- **Likes**
  - GET `/likes` - Get all likes.
  - GET `/likes/posts/:id` - Get all likes for a single post.
  - POST `/likes` - Add single like.
  - DELETE `/likes/:id` - Delete single like.
- **Comments**
  - GET `/comments` - Get all comments.
  - GET `/comments/posts/:id` - Get all comments for a single post.
  - POST `/comments` - Add single comment.
  - PATCH `/comments/:id` - Edit single comment.
  - DELETE `/comments/:id` - Delete single comment.
- **Albums**
  - GET `/albums` - Get all albums.
  - POST `/albums` - Add new album.
- **Pictures**
  - GET `/pictures` - Get all pictures.
  - GET `/pictures/albums/:id` - Get all pictures for a single album.
  - POST `/pictures` - Add single picture.
  - DELETE `/pictures/:id` - Delete single picture.

The responses from your Express app should have three keys: `status`, `message`, and `body`. For example, when I send a GET request for a single user, I should get back something that looks like this:

```js
{
  status: "success",
  message: "got single user",
  body: {
    id: 1,
    name: "Reed",
    age: 46
  }
}
```


// scrap:
body: the claws  almost caressed the grey concrete wall, moving slowly and with so much silent power.

//https://learn.co/lessons/sql-insert-select-update-code-along

//------------------------
Mateo:
//--------------------------
```js
const editSinglePost = (req, res, next) => {
  db.none(
    "UPDATE posts SET body=${body} WHERE id=${postId}",{
      body:req.body.body,
      postId:req.params.id
    }
  ).then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'New user ADDED.',
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}
```
//-----------------
Mine was:
//----------------
```js
const editSinglePost = (req, res, next) => {
  let postId = parseInt(req.params.id);
  db.none(
    "UPDATE posts SET body = body.value WHERE posts.id=$1", [postId], req.body
  ).then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'New user ADDED.',
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}
```

//----------
petpedia
//--------
```js
const updatePet = (req, res, next) => {
  db.none('UPDATE pets SET owner_id=${owner_id}, species=${species}' + ', age=${age}, name=${name} WHERE id=${id}', {
    owner_id: parseInt(req.body.owner_id),
    species: req.body.species,
    age: parseInt(req.body.age),
    name: req.body.name,
    id: parseInt(req.params.id)
  })
  .then(()=> {
    res.status(200)
      .json({
        status: 'success',
        message: 'You Updated a PET!'
      })
  })
  .catch(err => {
    return next(err);
  })
}
```

//-------------
Michelle:
//--------------
```js
const editSinglePost2 = (req, res, next) => {
  // let postId = parseInt(req.params.id);
  db.none(
    "UPDATE posts SET body=${newBody} WHERE posts.id=${postId}", {
      newBody: req.body.newBody,
      postId: parseInt(req.params.id)
    }
    //in postman:
    //http://localhost:3000/posts/3
    //key: newBody, value: hellow4
  ).then (() => {
    res.status(200)
    .json({
      status: 'success',
      message: 'New user ADDED.',
    })
  }).catch((err) => {
    console.log(err);
    next();
  })
}
//https://learn.co/lessons/sql-insert-select-update-code-along

```

//Michelle
```js
INSERT INTO posts() VAlUES()
```
with nothing else.
or
//
```js
"INSERT INTO posts(poster_id, body) VALUES(${id}, ${body})", req.body)
```
- and it would look in the body of the postman to dind it.

(unles have a parameter)
//
```js
"INSERT INTO posts(poster_id, body) VALUES(${id}, ${body})", {
  poster_id: req.body.id
}
```
(in order to re(assign) it to poster_id bc posts didn;t start off with the name poster_id)

//------------
```js
"DELETE FROM posts WHERE id=${id}", req.params
```
vs

```js
let userId = parseInt(req.params.id);
'DELETE FROM likes WHERE users.id=$1', [userId]
```
