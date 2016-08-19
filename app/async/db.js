'use strict';
const makeErrorRandomly = require('../make-error-randomly');

const users = [];

function findAll(callback) {
  setTimeout(() => {
    const error = makeErrorRandomly();
    if (error) {
      callback(error);
    } else {
      callback(null, users);
    }
  }, 1000);
}

function save(user, callback) {
  setTimeout(() => {
    const error = makeErrorRandomly();
    if (error) {
      return callback(error);
    }
    users.push(user);
    callback(null, null);
  }, 1000);
}

module.exports = {findAll, save};