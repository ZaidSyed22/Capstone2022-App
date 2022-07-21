const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

const GOOGLE_CLIENT_ID = '414503057410-h7un1e8p8mm69hlt2rv8fub8a0jli0u4.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback   : true
},
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile)
    }
));

passport.serializeUser(function(user, done) {
    done(null, user)
});

passport.deserializeUser(function(user, done) {
    done(null, user);
  });