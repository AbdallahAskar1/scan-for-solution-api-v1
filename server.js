const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');

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

//simple route
app.get('/',(req,res)=>{
    res.json({message:'welcome to our scan for solution application'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> {
    console.log(`server is running on http://localhost:${PORT}`);
});
