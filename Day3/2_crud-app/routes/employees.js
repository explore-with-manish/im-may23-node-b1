var express = require('express');
const empCtrl = require('../controllers/employees-controller');

var router = express.Router();

router.get('/', empCtrl.index);

router.get('/details/:rId', empCtrl.details);

router.get('/delete/:rId', empCtrl.delete_get);

router.post('/delete/:rId', empCtrl.delete_post);

module.exports = router;
