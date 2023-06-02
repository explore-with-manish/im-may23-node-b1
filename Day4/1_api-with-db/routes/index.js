var express = require('express');
const homeCtrl = require('../controllers/home-controller');

var router = express.Router();

router.get('/', homeCtrl.index);

router.get('/about', homeCtrl.about);

router.get('/contact', homeCtrl.contact);

module.exports = router;
