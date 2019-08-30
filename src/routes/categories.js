'use strict';
const express = require('express')
const Route = express.Router();

const categoriesController = require('../controllers/categories')
const Auth = require('../helpers/auth')

Route
 .post('/',Auth.verifyToken, categoriesController.insertCategories)
 .get('/', categoriesController.getCategories)
 .get('/:id', categoriesController.getOneCategory)
 .patch('/:id',Auth.verifyToken, categoriesController.updateCategory)
 .delete('/:id',Auth.verifyToken, categoriesController.deleteCategory)
 module.exports = Route



 