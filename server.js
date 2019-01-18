'use strict';

const express = require('express');
const mongojs = require('mongojs');

const app = express();
const router = express.Router();

const PORT = process.env.PORT || 5000;

app.use(express.static('public'));

// Database configuration
// Save the URL of our database as well as the name of our collection
const databaseUrl = 'zoo';
const collections = ['animals'];

// Use mongojs to hook the database to the db variable
const db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on('error', function(error) {
  console.log('Database Error:', error);
});

// 2. At the "/all" path, display every entry in the animals collection
app.get('/all', function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  db.animals.find({}, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

// 3. At the "/name" path, display every entry in the animals collection, sorted by name
app.get('/name', function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by name (1 means ascending order)
  db.animals.find().sort({ name: 1 }, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

// 4. At the "/weight" path, display every entry in the animals collection, sorted by weight
app.get('/weight', function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything,
  // but this time, sort it by weight (-1 means descending order)
  db.animals.find().sort({ weight: -1 }, function(error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});


app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
