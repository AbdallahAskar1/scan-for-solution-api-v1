const config = require('../config/auth.config');
const DB = require('../models')
const User = DB.user;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
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
        username:req.body.username,
    })
    .exec((err,user)=> {
        if (err) {
            return res.status(404).send({message:'user not found'})
        }
        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!passwordIsValid){
            return res.status(410).send({message:"invalid password!"});
        }
        let token = jwt.sign({id:user.id},config.secret,{
            expiresIn:86400, //24 hour
        });
        req.session.token = token;

        res.status(200).send({
            id:user._id,
            username:user.username,
            email:user.email,
        })
    })
}

//logout 
exports.logout = async (req,res)=> {
    try {
        req.session= null;
        return res.status(200).send({message:"you have been log out "})
    } catch (err) {
        this.next(err)
    }
}