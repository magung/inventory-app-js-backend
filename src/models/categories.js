const connection = require('../database/conn')

module.exports = {
    insertCategory: (data) =>{
        return new Promise((resolve, reject)=>{
            connection.query(`INSERT INTO categories SET ?`, data, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    },
    getCategories: (sortBy, sort, page, limit) =>{
        return new Promise((resolve, reject) =>{
            let query = `SELECT * FROM categories ORDER BY `;
            query += `${sortBy} ${sort} LIMIT ${page}, ${limit}`;
            connection.query(query, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    },
    updateCategory: (id, data)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`UPDATE categories SET ? WHERE id = ${id}`, data, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    },
    deleteCategory: (data) =>{
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM categories WHERE id = ${data}`,(err, result) => {
                if(!err){
                    resolve(result)
                }else(
                    reject(err)
                )
            })
        })
    },
    searchCategory: (id) =>{
        return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM categories WHERE id like "%${id}%" or category like"%${id}%"`, (err, result)=>{
                if(!err){
                    resolve(result)
                }else{
                    reject(err)
                }
            })
        })
    }

}