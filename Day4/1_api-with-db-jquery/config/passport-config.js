const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        // Code to Read Username & Password from database or a file
        // Verify the username and password coming from the client side

        if (email !== 'manish@abc.com')
            return done(null, false, req.flash('loginMessage', 'Authentication Failed - User not found!'));

        if (password !== 'manish')
            return done(null, false, req.flash('loginMessage', 'Authentication Failed - Wrong Password!'));

        var user = { email };

        return done(null, user);
    }));
}