'use strict';

require('./src/ns')(__dirname + '/src');
require('./src/ns')(__dirname + '/views', 'views');
require('./src/ns')(__dirname + '/fixtures', 'fixtures');

var express = require('express');
var path = require('path');
var controller = require(ns('::controller'));

var app = express();
app.set('views', ns('@views'));
app.set('view engine', 'twig');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', controller);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

module.exports = app;
