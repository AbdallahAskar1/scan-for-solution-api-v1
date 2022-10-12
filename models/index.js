const mongoose = require('mongoose');

const db= {};

db.mongoose=mongoose;
db.user= require('./user.model')
db.questoins= require('./questions.model')

module.exports = db;