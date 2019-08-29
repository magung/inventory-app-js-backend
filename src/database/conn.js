require('dotenv').config()
const mysql = require('mysql')

// var con = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'db_inventory'
// })

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})
// con.connect(function(err) {
// 	if (err) throw err;
// });

module.exports = con;
// con.connect((err)=>{
//     if(!err){
//       console.log("database connect")
//     }else{
//       console.log(err)
//       console.log("database eror")
//     }
//   })