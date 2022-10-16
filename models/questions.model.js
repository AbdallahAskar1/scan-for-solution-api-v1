const mongoose = require('mongoose');
const User = require('./user.model');

const question = mongoose.model(
  "question",
  new mongoose.Schema({
    question_body: String,
    choices: Array,
    answer: String,
    //created_by:ObjectId,
  })
);