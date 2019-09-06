'use strict';
const modelUsers = require('../models/users')
const response = require('../res')
require('dotenv').config();

const isFormFalid = (data)=>{
    const Joi = require('@hapi/joi')
    const schema = Joi.object().keys({
        name: Joi.string(),
        username: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email({ minDomainSegments: 2 }),
        password: Joi.string(),
        level:  Joi.string()
    })
    const result = Joi.validate(data, schema)
    if (result.error == null) return true
    else return false
}

const hash = (string) => {
    const crypto = require('crypto-js')
    return crypto.SHA256(string)
      .toString(crypto.enc.Hex)
}

module.exports = {

    // REGISTER user
    regUser: (req, res)=>{
        const data = {
            name : req.body.name,
            username : req.body.username,
            email : req.body.email,
            //password : req.body.password,
            level: 'regular'
        }
        const password = hash(req.body.password);

        if(!isFormFalid(data)){
            return response.dataManipulation(res, 200, "Data not valid")
        }
        modelUsers.register(data, password)
        .then(result=>{
            data.id = result.id
            return response.dataManipulation(res, 200, "Success register user", data)
        })
        .catch(err=>{
            console.log(err)
            return response.dataManipulation(res, 201, "Failed register , username or email already exist")
        })
        
        
        // modelUsers.userReady(data.username)
        // .then(result =>{
        //     console.log('username already')
        //     return response.dataManipulation(res, 201, "email or username already exists")
        // })
        // .catch(err => {
            
        // })

        
    },
    // REGISTER for admin
    regAdmin: (req, res)=>{
        const data = {
            name : req.body.name,
            username : req.body.username,
            email : req.body.email,
            //password : req.body.password,
            level: 'admin'
        }
        const password = hash(req.body.password);
        //data.password = hash(data.password)

        if(!isFormFalid(data)){
            return response.dataManipulation(res, 200, "Data not valid")
        }

        modelUsers.register(data, password)
        .then(result=>{
            data.id = result.id
            return response.dataManipulation(res, 200, "Success register admin", data)
        })
        .catch(err=>{
            console.log(err)
            return response.dataManipulation(res, 201, "Failed register, username or email already exist")
        })
    },

    // READ - get all users
    
    // allUsers:(req, res)=>{
    //     modelUsers.allUsers()
    //     .then(result=>res.json(result))
    //     .catch(err=>console.log(err))
    // },

    allUsers:(req, res)=>{
        const sortBy = req.query.sortBy || 'id';
		const sort = req.query.sort || 'ASC';
		const limit = parseInt(req.query.limit) || 10;
        const page = req.query.page || 1;
        const skip = (parseInt(page)-1)* limit;
        const search = req.query.search;
        let total =''
        modelUsers.totalData(search)
        .then(result => {
             total = result
        })
        .catch(err => console.log(err) );
        modelUsers.allUsers(search, sortBy, sort, skip, limit, total)
        .then(result => {
           
            if(result.length !== 0) return response.getDataWithTotals(res, 200, result, result.length, page, total )
			else return response.getDataResponse(res, 404, null, null, null, "Data not Found")
        })
        .catch(err => console.log(err))
        
    },

    //LOGIN
    loginUser: (req, res)=>{
        const email = req.body.email;
        const password = hash(req.body.password);
        console.log(password)


        modelUsers.loginUser(email)
        .then(result=>{
            
            if(result.length !== 0){
                if(result[0].password == password){
                    const jwt =require('jsonwebtoken')
                    const load = {
                        userId: result[0].id,
                        username: result[0].username,
                        email: result[0].email,
                        level: result[0].level
                    }
    
                    jwt.sign(load, process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXP}, (err, token)=>{
                        if(!err){
                            res.json({
                                dataUser:load,
                                token: `${token}`})
                        }else{console.log(err)}
                    })
                }else{
                    return response.dataManipulation(res, 400, "Email and Password doesnt match")
                }
            }else{
                return response.dataManipulation(res, 400, "Email doesnt exist")
            }
        })
        .catch(err=>{
            console.log(err)
            return response.dataManipulation(res, 201, "Failed Login user")
        })
    },

    //UPDATE
    updateUser:(req, res)=>{
        const id = req.params.id
        const data={
            name : req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        modelUsers.udateUser(data, id)
        .then(result=> {
            data.id = id
            if(result.affectedRows !== 0) return response.dataManipulation(res, 200, "Succes updating user")
            else return response.dataManipulation(res, 201, "Failed to update user")
        })
        .catch(err=>console.log(err))
    },

    //DELETE user
    deleteUser:(req, res)=>{
        const id = req.params.id
        modelUsers.deleteUser(id)
        .then(result=> {
            result.id = id
            if(result.affectedRows !== 0) return response.dataManipulation(res, 200, "Success deleting user")
            else return response.dataManipulation(res, 404, "Failed to delete user or Not Found")
        })
        .catch(err=>{
            console.log(err)
            return response.dataManipulation(res, 500, err)
        })
    }
}