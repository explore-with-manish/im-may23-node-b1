module.exports = function () {
    if (process.env.NODE_ENV === "production")
        return require('./config/webpack.prod.js');
    else
        return require('./config/webpack.dev.js');
}