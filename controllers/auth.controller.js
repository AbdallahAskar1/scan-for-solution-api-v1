const config = require('../config/auth.config');
const DB = require('../models')
const User = DB.user;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
const { verifyToken } = require('../middlewares/authJwt');
//sign up
exports.signup = (req,res)=>{
    const user= new User({
        username:req.body.username,
        email:req.body.email,
        password:bcrypt.hashSync(req.body.password),
    });
    user.save((err,_user)=> {
        if (err){
            return res.satus(500).send({message:err});    
        }
        res.send({ message: "User was registered successfully!" });

    })
}

///log in 
exports.login = (req,res)=> {
    User.findOne({
        username:req.body.username
    })
    .then( user => {
            let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
                );
        if (!passwordIsValid){
            return res.status(410).send({message:"invalid password!"});
        }
        let Token = jwt.sign({id:user.id},config.secret,{
            expiresIn:86400, //24 hour
        });
        
        res.setHeader('Authorization', 'Bearer '+ Token)
        res.status(200).send({
            id:user._id,
            username:user.username,
            email:user.email,
        })
    }).catch(_err=> {
        res.status(404).send({message:'user not found'})
    })
}

//logout 
exports.logout = async (req,res)=> {
    try {
        req.body.token=null
        return res.status(200).send({message:"you have been log out "})
    } catch (err) {
        this.next(err)
    }
}