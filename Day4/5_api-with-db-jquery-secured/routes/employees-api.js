var express = require('express');
var cors = require('cors');

const empApiCtrl = require('../controllers/employees-api-controller');
const { validateToken } = require('../controllers/account-controller');

var router = express.Router();

router.use(cors());

router.use(validateToken);

// GET - /api/employees (Get All Employees)
router.get("/", empApiCtrl.getAll);

module.exports = router;