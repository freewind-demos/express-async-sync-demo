'use strict';
const makeErrorRandomly = require('../make-error-randomly');

const store = [];

function findAll() {
  const error = makeErrorRandomly();
  if (error) {
    throw error;
  }
  return store;
}

function save(user) {
  const error = makeErrorRandomly();
  if (error) {
    throw error;
  }
  store.push(user);
}

module.exports = {findAll, save};