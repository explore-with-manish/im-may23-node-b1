var express = require('express');
const accCtrl = require('../controllers/account-controller');

var router = express.Router();

module.exports = function(passport) {
    router.get('/', function (req, res, next) {
        res.redirect('account/login');
    });
    
    router.get('/login', accCtrl.login_get);
    
    router.post('/login', accCtrl.login_post(passport));

    return router;
};
