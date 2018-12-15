const express = require('express');
const app = express();
const bodyParser = require ('body-parser');

app.get('/',(req,res)=>{
  res.send('This is the HOMEPAGE')
})
app.listen(5000,()=>{
  console.log("Listening to port 5000");
})
