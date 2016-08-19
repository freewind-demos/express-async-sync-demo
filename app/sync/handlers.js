'use strict';
const userService = require('./service');
const User = require('../user-model');

function getAllUsers(req, res, next) {
  try {
    const users = userService.getAllUsers();
    res.json(users);
  } catch (err) {
    return next(err);
  }
}

function saveUser(req, res, next) {
  const {username, password} = req.body;
  try {
    userService.saveUser(new User({username, password}));
    res.sendStatus(201);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  getAllUsers, saveUser
};