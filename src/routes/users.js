'use strict';
const express = require('express')
const Route = express.Router();

var usersController = require('../controllers/users')
var Auth = require('../helpers/auth')

Route
.post('/register', usersController.regUser)
.post('/register/admin', Auth.verifyToken, Auth.verifyAdmin, usersController.regAdmin)
.post('/login', usersController.loginUser)
.get('/', Auth.verifyToken, Auth.verifyAdmin, usersController.allUsers)
.put('/:id', Auth.verifyToken, Auth.verifyAdmin, usersController.updateUser)
.delete('/:id', Auth.verifyToken, Auth.verifyAdmin, usersController.deleteUser)
 module.exports = Route