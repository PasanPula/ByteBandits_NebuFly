const passport = require("passport");

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const User = require("../Models/User.Model");
const bcrypt = require("bcryptjs");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;
opts.issuer = process.env.ISSUER;
opts.audience = process.env.AUDIENCE;
opts.algorithms = [process.env.ALGORITHM];
opts.ignoreExpiration = false;

const JWT_STRATEGY = new JwtStrategy(opts, async(jwt_payload, done) => {
 try{
  const user =  await User.findById({ _id: jwt_payload._id }).select("-password")
    if (user) {
      if(user.is_active === false){
        return done(null, false);
      }
      console.log("User found in db in passport");
      return done(null, user);
    } else {
      console.log("User not found in db");
      return done(null, false);
    }
  }
  catch(err){
    return done(err, false);
  }
});

passport.use(JWT_STRATEGY);

// module.exports.verifyUser = (req, res, next) => {
//   passport.authenticate("jwt", { session: false }, (err, user) => {
//     if (err || !user) {
//       return next(err);
//     } else {
//       req.user = user;
//       return next();
//     }
//   });
// };

module.exports.verifyUser = passport.authenticate("jwt", { session: false });

module.exports.verifyAdmin = (req, res, next) => {
  if (req.user.is_admin !== true) {
    res.status(403).send({
      error: "You do not have access to this resource",
    });
  } else {
    next();
  }
};

module.exports.getJWT = async (user) => {
  const acess_token = await this.getAccessToken(user);

  const refresh_token = await this.getRefreshToken(user);

  return { acess_token: acess_token, refresh_token: refresh_token };
};

module.exports.getRefreshToken = async (user) => {
  return new Promise( (resolve, reject) => {
    const jwt_payload = {
      _id: user._id,
      email: user.email,
    };

   jwt.sign(jwt_payload, process.env.SECRET, {
      algorithm: process.env.ALGORITHM,
      issuer: process.env.ISSURE,
      audience: process.env.AUDIENCE,
      expiresIn: process.env.EXP_REFRESH_TOKEN,
    }, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
};

module.exports.getAccessToken = async (user) => {
  return new Promise((resolve, reject) => {
    const jwt_payload = {
      _id: user._id,
      email: user.email,
    };

    jwt.sign(jwt_payload, process.env.SECRET, {
      algorithm: process.env.ALGORITHM,
      issuer: process.env.ISSURE,
      audience: process.env.AUDIENCE,
      expiresIn: process.env.EXP_ACCESS_TOKEN,
    }, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    })
  });


}

module.exports.authenticate = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
 
 
  console.log(user);

  if (!user) {
    res.statusCode = 403;
    res.setHeader("Content-Type", "application/json");
    res.json({
      success: false,
      status: "There Is not User accout exists",
      data: null,
    });
  } else {
    if (user.is_verified === false||user.is_active === false) {
      res.statusCode = 401;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: false,
        status: "Authentication failed. User not verified.",
        data: null,
      });
    } else {

      console.log(req.body.password);
      console.log(user.password);
       const result = await bcrypt.compare(req.body.password, user.password)

       if (result) {
        req.user = user;
        next();
      } else {
        res.status(401).send({
          message: "Authentication failed. Wrong password.",
        });
    }
  }
}
}
