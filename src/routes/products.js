'use strict';
const express = require('express')
const Route = express.Router();

var productController = require('../controller/productController')
const Auth = require('../helpers/auth')
const err = require('../controller/controller')

Route
 // url pages and implementation routes
 .get('/', productController.allProducts)
 .get('/:name',productController.searchProducts)
 .post('/',Auth.verifyToken, productController.insertProducts)
 .delete('/:id_product',Auth.verifyToken, productController.deleteProduct)
 .patch('/update/:id_product',Auth.verifyToken, productController.updateProduct)
 .patch('/:id_product',Auth.verifyToken, productController.AddandReduceProduct)

 module.exports = Route