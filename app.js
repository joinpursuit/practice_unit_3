const express = require('express');
const app = express();
const port = 3000;

const listenMsg = () => (
  console.log(`listening on port${port}`));

const endRoute = (req, res) => (res.send('Home Page'));

app.get('/', endRoute);

app.listen(port, listenMsg);
