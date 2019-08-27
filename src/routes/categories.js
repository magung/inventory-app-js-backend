'use strict';
const express = require('express')
const Route = express.Router();

const todoList = require('../controller/categoriesController')
const Auth = require('../helpers/auth')

 // url pages and implementation routes
Route
 .get('/', todoList.getCategories)
 .post('/',Auth.verifyToken, todoList.insertCategories)
 .patch('/:id',Auth.verifyToken, todoList.updateCategory)
 .delete('/:id',Auth.verifyToken, todoList.deleteCategory)
 .get('/:id', todoList.searchCategory)
 module.exports = Route



 