const mongoose = require('mongoose');

const db= {};

db.mongoose=mongoose;
db.user= require('./user.model')
db.questions= require('./questions.model')

module.exports = db;