'use strict';
const express = require('express')
const Route = express.Router();

const categoriesController = require('../controller/categoriesController')
const Auth = require('../helpers/auth')

 // url pages and implementation routes
Route
 .get('/', categoriesController.getCategories)
 .post('/',Auth.verifyToken, categoriesController.insertCategories)
 .patch('/:id',Auth.verifyToken, categoriesController.updateCategory)
 .delete('/:id',Auth.verifyToken, categoriesController.deleteCategory)
 .get('/:id', categoriesController.searchCategory)
 module.exports = Route



 