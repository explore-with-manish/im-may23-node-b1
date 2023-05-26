const express = require('express');
const empCtrl = require('../controllers/employees-controller');

const router = express.Router();

router.get('/', empCtrl.index);

module.exports = router;