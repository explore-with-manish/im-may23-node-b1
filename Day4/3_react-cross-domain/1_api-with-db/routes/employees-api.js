var express = require('express');
var cors = require('cors');

const empApiCtrl = require('../controllers/employees-api-controller');

var router = express.Router();

// var corsOptions = {
//     origin: 'http://localhost:4000'
// }

// router.use(cors(corsOptions));

router.use(cors());

// GET - /api/employees (Get All Employees)
router.get("/", empApiCtrl.getAll);

module.exports = router;