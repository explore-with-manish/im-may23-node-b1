var express = require('express');
const empCtrl = require('../controllers/employees-controller');
const { isAuthenticated } = require('../controllers/account-controller');

var router = express.Router();

router.use(isAuthenticated);

router.get('/', empCtrl.index);

module.exports = router;
