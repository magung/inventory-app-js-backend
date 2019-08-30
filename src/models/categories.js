'use strict';
const connection = require('../database/conn')

module.exports = {

    //CREATE data category
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

    // get total data in database
    totalData: (search) => {
        return new Promise((resolve, reject) =>{
            let query = `SELECT COUNT(*) as "data in database" FROM categories `
            if(search){
                query +=  `WHERE name like "%${search}%"`
            }
            connection.query(query, (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    //READ - get one category search by id
    getOneCategory: (id) => {
        return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM categories WHERE id = ?`,id, (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    // UPDATE data category  
    updateCategory: (id, data)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`UPDATE categories SET ? WHERE id = ? `, [data, id], (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    // DELETE data category
    deleteCategory: (id) =>{
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM categories WHERE id = ?`, id, (err, result) => {
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    }


}