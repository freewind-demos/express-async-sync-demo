const userService = require('./service');
const User = require('../user-model');

function getAllUsers(req, res, next) {
  userService.getAllUsers(function (err, users) {
    if (err) return next(err);
    res.json(users);
  })
}

function saveUser(req, res, next) {
  const {username, password} = req.body;
  userService.saveUser(new User({username, password}), function (err, saved) {
    if (err) return next(err);
    res.sendStatus(201);
  });
}

module.exports = {
  getAllUsers, saveUser
};