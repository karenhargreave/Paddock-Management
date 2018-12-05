var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url, {useMongoClient: true});
// setup the app middlware

// middleware
var morgan = require('morgan');
var bodyParser = require('body-parser');
// setup global middleware here
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

// setup the api
app.use('/api/', api);

module.exports = app;
