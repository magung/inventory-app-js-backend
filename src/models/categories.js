const connection = require('../database/conn')

module.exports = {

    //CREATE
    insertCategory: (data) =>{
        return new Promise((resolve, reject)=>{
            connection.query(`INSERT INTO categories SET ?`, data, (err, result) => {
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    //READ - get all data Categories
    getCategories: (search, sortBy, sort, skip, limit) =>{
        return new Promise((resolve, reject) =>{
            let query = `SELECT * FROM categories `;
            if(search){
               query += `WHERE id like "%${search}%" or category like "%${search}%"`
            }
            query += ` ORDER BY ${sortBy} ${sort} LIMIT ${skip}, ${limit}`;
            connection.query(query, (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    //READ - get one category search by ID or by NAME
    searchCategory: (id) =>{
        return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM categories WHERE id like "%${id}%" or category like"%${id}%"`, (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    //UPDATE
    updateCategory: (id, data)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`UPDATE categories SET ? WHERE id = ${id}`, data, (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    //DELETE
    deleteCategory: (data) =>{
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM categories WHERE id = ${data}`,(err, result) => {
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    }


}