const { getAllEmployees } = require('../data-access/employees-dal');

exports.getAll = (req, res, next) => {
    getAllEmployees().then(result => {
        res.status(200).json({ data: result, message: "Success, getting Employees" });
    }, eMsg => {
        res.status(500).json({ data: result, message: "Error, getting Employees" });
    });
}