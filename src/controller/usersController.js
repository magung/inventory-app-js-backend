const modelUsers = require('../models/users')
const response = require('../res')
require('dotenv').config();

const isFormFalid = (data)=>{
    
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
            password : req.body.password,
            level: 'regular'
        }

        data.password = hash(data.password)

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

    // READ - get all users
    
    allUsers:(req, res)=>{
        modelUsers.allUsers()
        .then(result=>res.json(result))
        .catch(err=>console.log(err))
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
    
                    jwt.sign(load, process.env.JWT_SECRET,{expiresIn: '20m'}, (err, token)=>{
                        if(!err){
                            res.json({
                                dataUser:load,
                                token: `Baerer ${token}`})
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