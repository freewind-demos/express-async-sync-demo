const db = require('./db');

function getAllUsers() {
  return db.findAll();
}

function saveUser(user) {
  return db.save(user);
}

module.exports = {
  getAllUsers, saveUser
};