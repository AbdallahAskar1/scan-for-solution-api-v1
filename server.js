const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');
const DB = require('./models');
const { db } = require('./models/user.model');
const dbConfig = require('./config/db.config');

const app = express();

let corsOptions = {
    origin:'http://localhost:5001'
};
app.use(cors(corsOptions))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
    cookieSession({
        name:'askar-session',
        secret:'COOKIE_SECRET',
        httpOnly:true
    })
);

DB.mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=> {
        console.log('successfully connect to MongoDB.');

    })
    .catch(err => {
        console.log("connect error",err)
        process.exit();
    })
//simple route
app.get('/',(req,res)=>{
    res.json({message:'welcome to our scan for solution application'});
});
require('./routes/auth.routes')(app);


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> {
    console.log(`server is running on http://localhost:${PORT}`);
});
