const jwt = require('jsonwebtoken');
const config = require('../config/auth.config')
const DB = require('../models');
const User = DB.user;

verifyToken =(req,res,next)=> {
    // let token = req.headers.authorization
    let token = req.headers.authorization
    // console.log(token);
    
    if(!token || token == undefined){
        return res.status(403).send({message:"No token provided"})

    }
    token=token.replace('Bearer ', '');
    jwt.verify(token,config.secret,(err,decoded)=> {
        if(err){
            return res.status(401).send({message:"unauthorized"})
        }
        req.userId= decoded.id
        next();
    });
};

const authJwt = {
    verifyToken,
}
module.exports = authJwt
