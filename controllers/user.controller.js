const { verifyToken } = require("../middlewares/authJwt");
const choiceScore = require("../middlewares/choicesScore");
const { extractTextFromUrls } = require("../middlewares/scrapingUrls");
const { getOrganicData, search } = require("../middlewares/search");
const { questions } = require("../models");
const DB = require('../models');
const queryML = require("./QA");
const question = DB.questions;

exports.create_question=(req,res)=>{
    
    const q = new question({
        question_body:req.body.question_body,
        choices:req.body.choices,
        // answer:req.body.answer

    });
    q.save((err,q)=>{
        if(err){
            return res.status(500).send({message:err,status:false});
        }
        res.status(201).send({ message: "Question was created successfully!",status:true,id:q._id });
    })
};

exports.read_question = (req, res) => {
  const id = req.params.id;
  console.log(id);
  question.findById(id, (err, foundQuestion) => {
    if (err) {
      res.status(500).send({ message: "Error finding question", status: false });
    } else if (!foundQuestion) {
      res.status(404).send({ message: "Question not found", status: false });
    } else {
      res.status(200).send({ result: foundQuestion });
    }
  });
};

        
       
exports.search_question = async (req, res) => {
    try {
      const id = req.params.id;
      console.log(id);
  
      const q = await question.findById(id);
      if (!q) {
        return res.status(404).send({ message: "Question not found", status: false });
      }
  
      if (q.scores) {
        return res.status(200).send({ question : q });
      } else {
        const query = q.question_body.split(" ").join("+");
        const snippet = await getOrganicData(query);
        console.log(snippet);
        // const urls = data.map(item => item.links);
        // const extractedTexts = await extractTextFromUrls(urls);
       const answer= await queryML({"inputs": {
              "question": `${query}`,
              "context": `${[snippet]}`
            }})
        // const result = data.map((item, index) => ({
        //     ...item,
        //     extractedText: extractedTexts[index]
        //   }));
        // q.search_results = await result;
        console.log(answer)
        q.answer=answer;
        q.scores = await Promise.all(q.choices.map(async (choice) => {
          console.log(choice);
          console.log(answer.answer);
          const d = await choiceScore(choice, answer.answer);
          console.log(d);
          return d;
        }));
        await q.save();
        
        return res.status(200).send({ question: q });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send({ message: "Internal server error" });
    }
  };
  