const db = require('./db');

function getAllUsers(callback) {
  return db.findAll(callback);
}

function saveUser(user, callback) {
  return db.save(user, callback);
}

module.exports = {
  getAllUsers, saveUser
};