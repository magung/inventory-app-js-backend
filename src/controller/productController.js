'use strict';

var connection = require('../database/conn');
var response = require('../res');
var modelProduct = require('../models/products');
//CRUD Products
module.exports = {
	deleteProduct: (req, res)=>{
		const id_product = req.params.id_product
		modelProduct.deleteProduct(id_product)
		.then(result =>{
			result.id_product = id_product
			if(result.affectedRows !== 0) return response.dataManipulation(res, 200, "Success deleting data product")
			else return response.dataManipulation(res, 200, "Failed deleted, Data not found")
		})
		.catch(err =>{
			console.log(err)
			return response.dataManipulation(res, 500, err)
		})
	},

	allProducts:(req, res)=>{
		const sortBy = req.query.sortBy || 'id';
		const sort = req.query.sort || 'ASC';
		const limit = parseInt(req.query.limit) || 10;
		const page = (parseInt(req.query.page)-1)* limit || 0;
		const search = req.query.search;
		modelProduct.allProduct(search, sortBy, sort, page, limit)
		.then(result => res.json(result))
		.catch(err => console.log(err))
	
	},

	searchProducts:function(req,res){
		const name = req.params.name;
		
		modelProduct.searchProduct(name)
		.then(result=>{
			if(result.length !== 0) return response.ok(result, res)
			else return response.ok("Data Product Not Found", res)
		})
		.catch(err=>{
			console.log(err)
			return response.ok(err, res)
		})
	},

	insertProducts:function(req,res){
		const {name, description, image, quantity, id_category} = req.body;
		const date = new Date();
		const data={
			name: name,
			description: description,
			image: image,
			quantity: quantity,
			id_category: id_category,
			date_added: date,
			date_updated: date
		}
		modelProduct.insertProduct(data)
		.then(result=>{
			data.id_product = result.id_product
			return response.dataManipulation(res, 201, "Success insert data Product", data)
		})
		.catch(err=>{
			console.log(err)
			return response.dataManipulation(res, 500,"Failed to insert data Product")
		})
	},
	updateProduct:(req,res)=>{

		 const id_product = req.params.id_product
		 const data = {
			name:req.body.name,
			description: req.body.description,
			image: req.body.image,
			id_category: req.body.id_category,
			quantity: req.body.quantity,
			date_updated: new Date()
		}

		 modelProduct.updateProduct(id_product, data)
		 .then(result => {
			 data.id_product = id_product
			 if(result.affectedRows !== 0) return response.dataManipulation(res, 200, 'Success updating product', data )
			 else return response.dataManipulation(res, 200, "Failed updated", data)
		 })
		 .catch(err => {
			 console.log(err)
		 })
	},
	AddandReduceProduct:(req, res)=>{
		const id_product = req.params.id_product
		const act = req.query.act;
		const value = req.query.value || 1;
		const date = new Date();

		modelProduct.AddandReduceProduct(act, value, date, id_product)
		.then(result => {
			result.id_product = id_product
			if(result.affectedRows !== 0) return response.dataManipulation(res, 200, 'Success updating product' )
			 else return response.dataManipulation(res, 200, "Failed updated")
		})
		.catch(err => console.log(err))

	}
}
