var express = require('express');

const empApiCtrl = require('../controllers/employees-api-controller');

var router = express.Router();

// GET - /api/employees (Get All Employees)
router.get("/", empApiCtrl.getAll);

module.exports = router;