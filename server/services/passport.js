const passport = require("passport");
const keys = require("../config/keys");
const models = require("../models");
var FacebookTokenStrategy = require("passport-facebook-token");
// const FacebookStrategy = require("passport-facebook").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: keys.facebookClientID,
//       clientSecret: keys.facebookClientSecret,
//       callbackURL: "http://localhost:5000/auth/facebook/callback"
//     },
//     function(accessToken, refreshToken, profile, cb) {
//       models.User.findOne({ facebookId: profile.id }).then(existingUser => {
//         if (existingUser) {
//           return cb(null, existingUser);
//           //   done(null, existingUser);
//         } else {
//           new models.User({ facebookId: profile.id }).save().then(user => {
//             return cb(null, user);
//             // done(null, user);
//           });
//         }
//       });
//     }
//   )
// );

passport.use(
  new FacebookTokenStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      fbGraphVersion: "v3.0"
    },
    function(accessToken, refreshToken, profile, done) {
      models.User.findOne({ facebookId: profile.id }).then(existingUser => {
        if (existingUser) {
          return done(null, existingUser);
          //   done(null, existingUser);
        } else {
          new models.User({ facebookId: profile.id }).save().then(user => {
            return done(null, user);
            // done(null, user);
          });
        }
      });
    }
  )
);

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.jwtSecret;

passport.use(
  new JwtStrategy(opts, function(jwt_payload, done) {
    try {
      User.findOne({ id: jwt_payload.id }, function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          console.log("miaus");
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    } catch (e) {
      return done(e, false);
    }
  })
);
