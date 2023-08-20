
const User = require('../Models/User.Model');
const bcrypt = require('bcryptjs');
const OTPService = require('../Services/OTP.service');
const email_template = require('../Templates/OTP.Email.Template');
const EmailService = require('../Services/Email.Service');



const Authenticate = require('../Middleware/authetication');


const signin = async (req, res,next) => {

    if(req.user){
        const token =  await Authenticate.getJWT(req.user)
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json({success:true, status:'You are already authenticated',data:filter_user(req.user),token:token});
    }
    else{
        res.statusCode=403;
        res.setHeader('Content-Type','application/json');
        res.json({success:false, status:'You are not authenticated',data:null});
    }

}

const signup = async (req, res,next) => {

    const user = await User.findOne({ email: req.body.email })

    if (user) {
        res.statusCode=403;
        res.setHeader('Content-Type','application/json');
        res.json({success:false, status:'Email already exists',data:null});
    }
    else{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            user_name: req.body.user_name,
            email: req.body.email,
            NIC: req.body.nic,
            password: hashedPassword
        });


        try {
            const savedUser = await user.save();
            

            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json({success:true, status:'Create account successfully',data:filter_user(savedUser)});

        } catch (err) {
            res.statusCode=500;
            res.setHeader('Content-Type','application/json');
            res.json({success:false, status:err.message,data:null});
    }
}
}


const verify = async (req, res,next) => {

    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        res.statusCode=403;
        res.setHeader('Content-Type','application/json');
        res.json({success:false, status:'Email does not exist',data:null});
    }
    else{
        const isValid = await OTPService.verifyOTP(user.otp_secret, req.body.token);

        if (!isValid) {
            res.statusCode=403;
            res.setHeader('Content-Type','application/json');
            res.json({success:false, status:'Invalid OTP',data:null});
        }
        else{
            user.is_verified= true;

            await user.save();
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json({success:true, status:'Email verified successfully',data:filter_user(user)});
        }
    }

}

const RefreshToken = async (req, res,next) => {
    try{
        const token =  await Authenticate.getAccessToken(req.user)
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json({success:true, status:'Token Refreshed',data:filter_user(req.user),token:token});
    }
    catch(err){
        res.statusCode=403;
        res.setHeader('Content-Type','application/json');
        res.json({success:false, status:'Token Refreshed Failed',data:null});
    }
}


const GetOTP = async (req, res,next) => {

    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        res.statusCode=403;
        res.setHeader('Content-Type','application/json');
        res.json({success:false, status:'Email does not exist',data:null});
    }
    else{

        try {

            const secret = await OTPService.generateSecret();
            const token = await OTPService.generateOTP(secret.base32);


            const email = await EmailService({
                to: user.email,
                subject: 'OTP for email verification',
                text: `Your OTP for email verification is ${token}`,
                html: email_template(token)
            });
            
            if (!email) {
                res.statusCode=500;
                res.setHeader('Content-Type','application/json');
                res.json({success:false, status:'Create account failed',data:null});
            }

            user.otp_secret = secret.base32;

            await user.save();
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json({success:true, status:'Create account successfully',data:filter_user(user)});

        } catch (err) {
            res.statusCode=500;
            res.setHeader('Content-Type','application/json');
            res.json({success:false, status:err.message,data:null});
        }

    }
}

const UpdateUser = async (req, res,next) => {
   
    try{
    const Upadted_User = await User.findOneAndUpdate({ _id: req.user._id }, { $set: req.body }, { new: true })

        if (!Upadted_User) {
            res.statusCode=500;
            res.setHeader('Content-Type','application/json');
            res.json({success:false, status:'Fail to update profile',data:null});
        }
        else {
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json({success:true, status:'Profile updated successfully',data:filter_user(Upadted_User)});
        }
    }
    catch(err){
        res.statusCode=500;
        res.setHeader('Content-Type','application/json');
        res.json({success:false, status:'Fail to update profile',data:null});
    }
   
}

const DeleteUser = async (req, res,next) => {

    try{
    const deteled_user = await User.findOneAndUpdate({ _id: req.user._id }, { $set: { is_active: false } }, { new: true })

    console.log(deteled_user);

        if (!deteled_user) {
            res.statusCode=500;
            res.setHeader('Content-Type','application/json');
            res.json({success:false, status:'Fail to delete profile',data:null});
        }
        else {
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json({success:true, status:'Profile deleted successfully',data:filter_user(deteled_user)});
        }
    }
    catch(err){
        res.statusCode=500;
        res.setHeader('Content-Type','application/json');
        res.json({success:false, status:'Fail to delete profile',data:null});
}
}

const GetProfile = async (req, res,next) => {
     if(req.user){
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json({success:true, status:'Profile fetched successfully',data:filter_user(req.user)});
     }
    else{   
        res.statusCode=403;
        res.setHeader('Content-Type','application/json');
        res.json({success:false, status:'You are not authenticated',data:null});
    }

}






const filter_user = (user) => {
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        nic: user.NIC,
        createdAt: user.createdAt,
    }
}
    

module.exports = {
    signin,
    signup,
    verify,
    GetOTP,
    UpdateUser,
    DeleteUser,
    RefreshToken,
    GetProfile,
    filter_user
}


