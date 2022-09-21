const passport = require('passport');

const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const GOOGLE_CLIENT_ID = "1074835101867-6tajhh5bmggd2o0angb9vjgr07ji7k8k.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/index",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    
      return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});
passport.deserializeUser(function(user, done) {
    done(null, user);
});

