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
    res.render('account/login', { pageTitle: "Login View", message: "" });
}