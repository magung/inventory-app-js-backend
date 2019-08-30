'use strict';
const modelCategories = require('../models/categories')
// var connection = require('../database/conn');
 var response = require('../res');

//CRUD Categories
module.exports = {

    //CREATE - insert data category to database
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
            response.dataManipulation(res, 400, "Failed to insert category or ID already exists")
        })
    },

    //READ data categories
    // sortBy || sort || limit || page || search by name
    getCategories:(req, res)=>{
        const sortBy = req.query.sortBy || 'id';
		const sort = req.query.sort || 'ASC';
		const limit = parseInt(req.query.limit) || 10;
        const page = req.query.page || 1;
        const skip = (parseInt(page)-1)* limit;
        const search = req.query.search;

        let total =''
        modelCategories.totalData(search)
        .then(result => {
             total = result
        })
        
        .catch(err => console.log(err) );
        modelCategories.getCategories(search, sortBy, sort, skip, limit, total)
        .then(result => {
            if(result.length !== 0) return response.getDataWithTotals(res, 200, result, result.length, page, total )
			else return response.getDataResponse(res, 404, null, null, null, "Data not Found")
        })
        .catch(err => console.log(err))
    },

    // READ - get one category by id
    getOneCategory: (req, res)=>{
        const id = req.params.id;
        modelCategories.searchCategory(id)
        .then(result => {
            if(result.length !== 0) return response.ok(result, res)
            else return response.dataManipulation(res,404, "Data not found")
        })
        .catch(err => {
            console.log(err)
            return response.dataManipulation(res, 500, err)
        })
    },

    //UPDATE
    updateCategory:(req, res)=>{
        const id = req.params.id
        const data = {
            category: req.body.category,
            date_updated : new Date()
        }
        modelCategories.updateCategory(id, data)
        .then(result => {
            //data.id = id
            if(result.affectedRows !== 0) return response.dataManipulation(res, 200, "Succes updating category ", data)
            else return response.dataManipulation(res, 201, "Failed to update category")
        })
        .catch(err => console.log(err))
    },

    //DELETE
    deleteCategory:(req, res) => {
        const id = req.params.id
        modelCategories.deleteCategory(id)
        .then(result => {
            result.id = id
            if(result.affectedRows !== 0) return response.dataManipulation(res, 200, "Success deleting category with id : "+id)
            else return response.dataManipulation(res, 404, "Failed to delete category or Not Found")
        })
        .catch(err => {
            console.log(err)
            return response.dataManipulation(res, 500, err)
        })
    },

    
}
