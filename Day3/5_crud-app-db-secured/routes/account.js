var express = require('express');
const accCtrl = require('../controllers/account-controller');

var router = express.Router();

router.get('/', function (req, res, next) {
    res.redirect('account/login');
});

router.get('/login', accCtrl.login_get);

module.exports = router;
