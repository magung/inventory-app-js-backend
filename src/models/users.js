'use strict';
const connection = require('../database/conn')

module.exports = {
    register: (data, password)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`INSERT INTO users SET ? , password = ?`, [data, password], (err, result)=>{
                if(!err){resolve(result)}else{ reject(err)}
                   
            })

        })
    },

    loginUser:(email)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM users WHERE email = ?`, [email], (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    // allUsers:()=>{
    //     return new Promise((resolve, reject)=>{
    //         connection.query(`SELECT * FROM users`, (err, result)=>{
    //             if(!err){resolve(result)}else{reject(err)}
    //         })
    //     })
    // },

    //READ - get all data users
    allUsers: (search, sortBy, sort, skip, limit) =>{
        return new Promise((resolve, reject) =>{

            let query = `SELECT * FROM users `;
            if(search){
               query += `WHERE id like "%${search}%" or name like "%${search}%"`
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
            let query = "SELECT COUNT(*) as 'data in database' FROM users "
            if(search){
                query +=  `WHERE name like "%${search}%"`
            }
            connection.query(query, (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    udateUser:(data, id)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`UPDATE users set ? WHERE id = ? `, [data, id], (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },

    deleteUser:(id)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`DELETE FROM users WHERE id = ?`, id, (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    }
}