const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const users = require("./routes/users.js");
const posts = require ("./routes/posts.js");
const likes = require ('./routes/likes.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", users);
app.use("/posts",posts);
app.use('/likes',likes)

app.get("/", (req, res) => {
  res.send("This is the HOMEPAGE");
});

app.listen(5000, () => {
  console.log("Listening to port 5000");
});
