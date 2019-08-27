const modelUsers = require('../models/users')
const response = require('../res')
require('dotenv').config();

module.exports = {
    regUser: (req, res)=>{
        const data = {
            name : req.body.name,
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        }
        modelUsers.regUser(data)
        .then(result=>{
            data.id = result.id
            return response.dataManipulation(res, 200, "Success register user", data)
        })
        .catch(err=>{
            console.log(err)
            return response.dataManipulation(res, 201, "Failed register user")
        })
    },
    allUsers:(req, res)=>{
        modelUsers.allUsers()
        .then(result=>res.json(result))
        .catch(err=>console.log(err))
    },
    loginUser: (req, res)=>{
        const email = req.body.email;
        const password = req.body.password;
        //console.log(hashedPassword)

        modelUsers.loginUser(email, password)
        .then(result=>{
            if(result.length !== 0){
                const jwt =require('jsonwebtoken')
                const load = {
                    username: result[0].username,
                    email: result[0].email
                }

                jwt.sign(load, process.env.JWT_SECRET,{expiresIn: '300s'}, (err, token)=>{
                    if(!err){
                        res.json({
                            dataUser:result,
                            token: `Baerer ${token}`})
                    }else{console.log(err)}
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },
    updateUser:(req, res)=>{
        const id = req.params.id
        const data={
            name : req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        modelUsers.udateUser(data, id)
        .then(result=> res.json(result))
        .catch(err=>console.log(err))
    }
}