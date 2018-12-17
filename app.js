const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routes/users.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Bandleader HOMEPAGE');
})

app.listen(3000, () => {
  console.log('listening: port 3000');
})
