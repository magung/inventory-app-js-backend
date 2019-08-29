'use strict';
const express = require('express')
const Route = express.Router();

var usersController = require('../controller/usersController')
var Auth = require('../helpers/auth')

Route
.post('/register', usersController.regUser)
.post('/login', usersController.loginUser)
.get('/', usersController.allUsers)
.put('/:id', usersController.updateUser)
.delete('/:id', Auth.verifyToken, Auth.verifyAdmin, usersController.deleteUser)
 module.exports = Route