var express = require('express');
var cors = require('cors');

const empApiCtrl = require('../controllers/employees-api-controller');
const { validateToken } = require('../controllers/account-controller');

var router = express.Router();

router.use(cors());

router.use(validateToken);

// GET - /api/employees (Get All Employees)
router.get("/", empApiCtrl.getAll);

// GET - /api/employees/hasjkhdkjasdhj (Get Employee by Id)
router.get("/:rid", empApiCtrl.get);

// POST - /api/employees + Data in Body (Create a new Employee)
router.post("/", empApiCtrl.create);

// PUT - /api/employees/hasjkhdkjasdhj + Data in Body (Update Employee by Id)
router.put("/:rid", empApiCtrl.update);

// DELETE - /api/employees/hasjkhdkjasdhj (Delete Employee by Id)
router.delete("/:rid", empApiCtrl.delete);

module.exports = router;