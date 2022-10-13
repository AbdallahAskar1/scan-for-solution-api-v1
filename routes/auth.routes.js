const verifySignup = require('../middlewares/verifySignup');
const controller = require('../controllers/auth.controller');
const { verifyToken } = require('../middlewares/authJwt');

module.exports = function(app){
    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/auth/signup",
    verifySignup.checkDuplicateUsernameOrEmail,
    controller.signup
    );

    app.post('/auth/login',controller.login);

    app.post('/auth/logout',
    verifyToken,
    controller.logout);

};