const connection = require('../database/conn')

module.exports = {
    regUser: (data)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`INSERT INTO users SET ?`, data, (err, result)=>{
                if(!err){resolve(result)}else{ reject(err)}
                   
            })

        })
    },
    loginUser:(email, password)=>{
        return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], (err, result)=>{
                if(!err){resolve(result)}else{reject(err)}
            })
        })
    },
    allUsers:()=>{
        return new Promise((resolve, reject)=>{
            connection.query(`SELECT * FROM users`, (err, result)=>{
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
    }
}