exports.isAuthenticated = function (req, res, next) {
    // res.status(401).send('Unauthorized Access!');

    // Logic to check user authentication status
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/account');
    }
}

exports.login_get = function (req, res, next) {
    res.render('account/login', { pageTitle: "Login View", message: req.flash('loginMessage') });
}

exports.login_post = function (passport) {
    // Logic to Authenticate the user against the passport strategy and redirect
    return passport.authenticate('local-login', {
        successRedirect: '/employees',
        failureRedirect: '/account'
    });
}