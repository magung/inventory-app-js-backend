'use strict';
const express = require('express')
const Route = express.Router();

var productController = require('../controllers/products')
const Auth = require('../helpers/auth')

Route
 // url pages and implementation routes
 .get('/', productController.allProducts)
 .get('/:id',productController.getOneProduct)
 .post('/',Auth.verifyToken, productController.insertProducts)
 .delete('/:id_product',Auth.verifyToken, productController.deleteProduct)
 .put('/:id_product',Auth.verifyToken, productController.updateProduct)
 .patch('/:id_product', productController.AddandReduceProduct)

 module.exports = Route