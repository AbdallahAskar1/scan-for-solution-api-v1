const mongoose = require('mongoose');
const User = require('./user.model');

const question = mongoose.model(
  "question",
  new mongoose.Schema({
    question_body: String,
    choices: Array,
    answer: new mongoose.Schema({
      score:Number,
      start:Number,
      end:Number,
      answer:String

    }),
    search_results:Array,
    //created_by:ObjectId,
  })
);
module.exports = question;