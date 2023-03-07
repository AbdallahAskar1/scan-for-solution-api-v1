const { verifyToken } = require("../middlewares/authJwt");
const { questions } = require("../models");
const DB = require('../models')
const question = DB.questions;

exports.create_question=(req,res)=>{
    
    const q = new question({
        question_body:req.body.question_body,
        choices:req.body.choices,
        answer:req.body.answer

    });
    q.save((err,q)=>{
        if(err){
            return res.satus(500).send({message:err,status:false});
        }
        res.status(201).send({ message: "Question was created successfully!",status:true,id:q._id });
    })
};
exports.read_question=(req,res)=>{
        const id = req.params.id;
        console.log(id);
        question.findById(id,(err, question)=>{
            if (err){
               res.status(404).send({message:"question not found", status:false})
            }else{
                res.status(200).send({result:question})
            }});
        
        
}