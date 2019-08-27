'use strict';
const express = require('express')
const Route = express.Router();

var todoList = require('../controller/controller')

Route
 // url pages and implementation routes
 .get('/', todoList.index)
module.exports = Route