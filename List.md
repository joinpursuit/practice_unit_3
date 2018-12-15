<!-- Programs Needed: Postgres(elephant),Psequel,Postman,Chrome,Iterm2,Atom
Packages Needed: nodemon, npm init(create json package),express,pg-promise,body-parser,axios -->

<!-- 1. Install the packages into the practice_unit_3 folder.(The DB nor the routes, nor the queries need them) -->

<!-- 2. Create the database (readme is the schema, and SQL) Test using turning on Postgres and using Psequel
psql -f seed.sql
Cat seed.sql | psql

Notes:
-I created it and loaded postgres and Psequel without using the command to read the file. ERROR does not exist.
- I forgot to go into the db folder then run cat seed.sql | psql
- important to use ; after every table created -->


<!-- 3. Create .gitignore file -->
                                        <!-- NOTES
At this point I have a database created with some inserted values to test it.
Now what comes next is creating the app.js so we can see a homepage.
From there I can create a route for Users
When users route is created I will need to create a queries folder to put my userqueries into. This js file will contain the logic that will grab the information from the database and show up on the app.js route path (http://localhost:5000/users).
 -->

<!-- 4. Create app.js in the practice_unit_3 folder. This is where all the routes and database come together.


                                        NOTES
Here we will require:

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const users = require('./routes/users.js');
const posts = require()
const likes = require()
const albums = require()
const comments = require()
const pictures = require()

app.get('/', (req, res)=> {
  res.send('This is the HOMEPAGE!')
})
OTHERWISE IT WILL SEND A STATUS OF 404
app.listen(5000, () => {
  console.log("listing to port 5000");
})
*Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist.*
-Run in the terminal nodemon app.js
-Go to http://localhost:5000 to test it. (right now all good )

5. Create a routes folder for the user route. and a queries.js for it as well.
users.js -route
usersQueries.js -queries -->
6. Create route and queries for posts
