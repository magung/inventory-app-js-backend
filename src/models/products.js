'use strict';
const connection = require('../database/conn')

module.exports = {

    //CREATE
    insertProduct: (data) => {
        return new Promise((resolve, reject) =>{
            connection.query(`INSERT INTO products set ?`, data, (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },
    //READ
    getOneProduct: (id) =>{
        return new Promise((resolve, reject)=>{
            connection.query(`SELECT products.id_product, products.name, products.description, products.image, categories.category, products.quantity, products.date_added, products.date_updated FROM products join categories on products.id_category = categories.id WHERE products.id_product = ${id}`, (err, rows)=>{
                if(!err){resolve(rows)}else{reject(err)}
            })
        })
    },
    allProduct:(search, sortBy, sort, skip, limit) =>{
        return new Promise((resolve, reject) => {
            
            let query = 'SELECT products.id_product as id, products.name as name, products.description , products.image, categories.category as category, products.quantity as quantity, products.date_added, products.date_updated as date_updated FROM products join categories on products.id_category = categories.id ';
            if(search){
                query += `WHERE name like "%${search}%" `;
            }
            query += `ORDER By `;
            query += `${sortBy} ${sort} LIMIT ${skip}, ${limit}`;
            connection.query(query, (err, result) => {
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    // get total data in database
    totalData: (search) => {
        return new Promise((resolve, reject) =>{
            let query = `SELECT COUNT(*) as data_in_database FROM products `
            if(search){
                query +=  `WHERE name like "%${search}%"`
            }
            connection.query(query, (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },
    
    //UPDATE
    updateProduct: (id_product, data) =>{
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE products SET ? WHERE id_product = ${id_product}`,data, (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },
    
    //DELETE
    deleteProduct: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM products WHERE id_product = ${data}`, (err, result) => {
                if(!err) {resolve(result)}else{reject(err)}
            })
        })
    },
    // ADD or REDUCE 
    AddandReduceProduct: (act, value,date, id_product)=>{
        return new Promise((resolve, reject) => {
            if(act == 'add'){
                var query = `UPDATE products set quantity = quantity + ${value}, date_updated = ? WHERE id_product = ?`
            }else if(act == 'reduce'){
                var query = `UPDATE products set quantity = quantity - ${value}, date_updated = ? WHERE id_product = ? AND ${value} <= quantity`
            }
            connection.query(query, [date, id_product], (err, result) => {
                if(!err){resolve(result)}else{reject(err)}})
        })
    }

}