'use strict';
const modelCategories = require('../models/categories')
// var connection = require('../database/conn');
 var response = require('../res');

//CRUD Categories
module.exports = {
    insertCategories: (req, res) =>{
        const data = {
            id : req.body.id,
            category : req.body.category,
            date_added : new Date(),
            date_updated : new Date()
        }
        modelCategories.insertCategory(data)
        .then(result => {
            data.id = result.id
            response.dataManipulation(res, 200, "Success insert category", data)
        })
        .catch(err => {
            console.log(err)
            response.dataManipulation(res, 201, "Failed to insert category")
        })
    },
    getCategories:(req, res)=>{
        const sortBy = req.query.sortBy || 'id';
		const sort = req.query.sort || 'ASC';
		const limit = parseInt(req.query.limit) || 10;
		const page = (parseInt(req.query.page)-1)* limit || 0;


        modelCategories.getCategories(sortBy, sort,page, limit)
        .then(result => res.json(result))
        .catch(err => console.log(err))
    },
    updateCategory:(req, res)=>{
        const id = req.params.id
        const data = {
            category: req.body.category,
            date_updated : new Date()
        }
        modelCategories.updateCategory(id, data)
        .then(result => {
            data.id = id
            if(result.affectedRows !== 0) return response.dataManipulation(res, 200, "Succes updating category")
            else return response.dataManipulation(res, 201, "Failed to update category")
        })
        .catch(err => console.log(err))
    },
    deleteCategory:(req, res) => {
        const id = req.params.id
        modelCategories.deleteCategory(id)
        .then(result => {
            result.id = id
            if(result.affectedRows !== 0) return response.dataManipulation(res, 400, "Success deleting category")
            else return response.dataManipulation(res, 404, "Failed to delete category or Not Found")
        })
        .catch(err => {
            console.log(err)
            return response.dataManipulation(res, 500, err)
        })
    },
    searchCategory: (req, res)=>{
        const id = req.params.id;
        modelCategories.searchCategory(id)
        .then(result => {
            if(result.length !== 0) return response.ok(result, res)
            else return response.ok("Data not found", res)
        })
        .catch(err => {
            console.log(err)
            return response(err, res)
        })
    }
}

// exports.categories = function(req, res){
//     connection.query('SELECT * FROM categories',  function(error, rows, field){
//         if (error) {
// 			console.log(error);
// 		} else {
// 			response.ok(rows, res);
// 		}
//     })
// }
// exports.insertCategories = function(req, res){
//     const {id, category} =req.body;
//     connection.query('INSERT into categories set id = ?, category = ?',[id, category],  function(error, rows, field){
//         if (error) {
// 			console.log(error);
// 		} else {
// 			response.ok("Category "+ category +" success to added", res);
// 		}
//     })
// }
// exports.deleteCategory = function(req, res){
//     const id =req.params.id;
//     connection.query('DELETE FROM categories where id = ?',[id],  function(error, rows, field){
//         if (error) {
// 			console.log(error);
// 		} else {
// 			response.ok("Category with id : "+ id +" success to delete", res);
// 		}
//     })
// }
// exports.updateCategory = function(req, res){
//     const id = req.params.id;
//     const category =req.body.category;
//     connection.query('UPDATE categories set category = ? WHERE id = ?',[category, id],  function(error, rows, field){
//         if (error) {
// 			console.log(error);
// 		} else {
// 			response.ok("Category "+ category +" success to updated", res);
// 		}
//     })
// }
// exports.searchCategory = function(req, res){
//     const id = req.params.id;
//     connection.query('SELECT * FROM categories WHERE category = ? or id = ?',[id, id],  function(error, rows, field){
//         if (error) {
// 			console.log(error);
// 		} else {
// 			response.ok(rows, res);
// 		}
//     })
// }