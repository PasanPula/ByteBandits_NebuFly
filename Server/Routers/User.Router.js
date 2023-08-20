const express = require('express');
const authenticator = require('../Middleware/authetication');
const userController = require('../Controllers/User.Controller');

const router = express.Router();


router.post('/signin',authenticator.authenticate ,(req, res,next) => {

    userController.signin(req, res,next);
});

router.post('/signup', (req, res,next) => {
    
    userController.signup(req, res,next);
});


router.post('/verify', (req, res,next) => {
        
    userController.verify(req, res,next);
});

router.post('/resend', (req, res,next) => {

    userController.GetOTP(req, res,next);
});


router.post('/refresh', authenticator.verifyUser,(req, res,next) => {
    
    userController.RefreshToken(req, res,next);
});


router.get('/profile', authenticator.verifyUser,(req, res,next) => {
    userController.GetProfile(req, res,next);
});







module.exports = router;