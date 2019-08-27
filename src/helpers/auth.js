const jwt = require('jsonwebtoken')
require('dotenv').config();
module.exports = {
    // Athorization : Bearer <access_token>
    //verify token
    verifyToken: (req, res, next)=>{
        //get auth header value
        const bearerHeader = req.headers['authorization'];
        //check if bearer is undefined
        if(typeof bearerHeader !== 'undefined'){
            //split at the space
            const bearer = bearerHeader.split(' ')
            // get token from array
            const bearerToken = bearer[1];
            // set the token
            const token = bearerToken
            //next middleware
            
            try{
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                if(decoded){
                    console.log(decoded)
                    next()
                }else { throw new Error(decoded) }
            }catch(err){
                console.error(err)
                res.sendStatus(403)
            }
        }else{
            //Forbiddden
            res.sendStatus(403)
        }
    }
}