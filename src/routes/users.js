'use strict';
const express = require('express')
const Route = express.Router();

var usersController = require('../controller/usersController')

Route
.post('/register', usersController.regUser)
.post('/login', usersController.loginUser)
.get('/', usersController.allUsers)
.put('/:id', usersController.updateUser)
 module.exports = Route