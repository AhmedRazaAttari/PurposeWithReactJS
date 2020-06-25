const passport = require('passport');
const User = require('../model/User');

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

// Import all our strategies
const loginStrategy = require('./loginStrategy');


// Configure our strategies
passport.use('local-signin', loginStrategy);


module.exports = passport;