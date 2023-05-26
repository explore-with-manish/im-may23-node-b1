const express = require('express');
const homeCtrl = require('../controllers/home-controller');

const router = express.Router();

router.get('/', homeCtrl.index);

router.get('/contact', homeCtrl.contact);

router.get('/about', homeCtrl.about);

module.exports = router;