'use strict';
const express = require('express')
const Route = express.Router();

var todoList = require('../controllers')

Route
 .get('/', todoList.index)
 .get('*', todoList.notFound) 
module.exports = Route