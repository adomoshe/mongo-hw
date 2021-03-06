'use strict';

const express = require('express');
const app = express();
const logger = require("morgan");
const mongoose = require("mongoose");

const axios = require("axios");
const cheerio = require("cheerio");

const db = require("./models");

const htmlRoutes = require('./routes/html-routes');

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
