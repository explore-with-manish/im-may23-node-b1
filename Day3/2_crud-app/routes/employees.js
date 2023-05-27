var express = require('express');
const empCtrl = require('../controllers/employees-controller');

var router = express.Router();

router.get('/', empCtrl.index);

module.exports = router;
