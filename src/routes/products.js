'use strict';
const express = require('express')
const Route = express.Router();

var todoList = require('../controller/productController')
const Auth = require('../helpers/auth')

Route
 // url pages and implementation routes
 .get('/', todoList.allProducts)
 .get('/:name',todoList.searchProducts)
 .post('/',Auth.verifyToken, todoList.insertProducts)
 .delete('/:id_product',Auth.verifyToken, todoList.deleteProduct)
 .patch('/update/:id_product',Auth.verifyToken, todoList.updateProduct)
 .patch('/:id_product',Auth.verifyToken, todoList.AddandReduceProduct)
 module.exports = Route