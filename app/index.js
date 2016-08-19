'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const syncHandlers = require('./sync/handlers');
const asyncHandlers = require('./async/handlers');
const app = express();

app.use(bodyParser.json());

app.get('/sync/users', syncHandlers.getAllUsers);
app.post('/sync/users', syncHandlers.saveUser);

app.get('/async/users', asyncHandlers.getAllUsers);
app.post('/async/users', asyncHandlers.saveUser);

app.use(function (err, req, res, next) {
  res.status(500).send(err.message);
});

app.listen(3000, function () {
  console.log('Listening on 3000');
});