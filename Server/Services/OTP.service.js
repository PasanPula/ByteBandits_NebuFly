const speakeasy = require('speakeasy');


const generateSecret = async() => {

            const secret = speakeasy.generateSecret({length: 20});
            return secret;
      
}

const generateOTP = async(secret) => {

    const token =  speakeasy.totp({
        secret: secret,
        encoding: 'base32',
        step: 60,
        window: 5
    })

    return token;
  
}

const verifyOTP = async(secret,token) => {
    
            const verified = speakeasy.totp.verify({
                secret: secret,
                encoding: 'base32',
                token: token,
                window: 5,
                step: 60
            });
            return verified;
    
    }

module.exports = {generateSecret,generateOTP,verifyOTP};