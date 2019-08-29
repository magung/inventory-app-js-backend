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
                    req.id = decoded.id
                    req.name = decoded.name
                    req.username = decoded.username
                    req.email = decoded.email
                    req.level = decoded.level
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
    },
    verifyAdmin: (req, res, next) => {
        if (req.level === 'admin') { next() } else { res.sendStatus(403) }
    }
}