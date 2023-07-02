'use strict';
const express = require('express');
const server = express();
const pageNotFoundHandler = require('./routeErrorHandlers/404.js');
const errorHandler = require('./routeErrorHandlers/505.js');
const stamper = require('./middleware/stamper.js');

server.get('/hello', stamper, (req, res) =>
  res.send(`Hello World! ${req.timestamp}`)
);
server.get('/goodbye', (req, res) => res.send('Goodbye World!'));
server.get('/bad', (req, res, next) =>
  next({ message: 'This is a bad route!' })
);

server.use('*', pageNotFoundHandler);
server.use(errorHandler);

module.exports = server;
