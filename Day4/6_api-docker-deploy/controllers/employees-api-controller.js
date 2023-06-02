const { getAllEmployees, getEmployee, insertEmployee, updateEmployee, deleteEmployee } = require('../data-access/employees-dal');

exports.getAll = (req, res, next) => {
    getAllEmployees().then(result => {
        res.status(200).json({ data: result, message: "Success, getting Employees" });
    }, eMsg => {
        res.status(500).json({ data: [], message: "Error, getting Employees" });
    });
}

exports.get = (req, res, next) => {
    var rid = req.params.rid;
    getEmployee(rid).then(result => {
        res.status(200).json({ data: result, message: "Success, getting Employee" });
    }, eMsg => {
        res.status(500).json({ data: null, message: "Error, getting Employee" });
    });
}

exports.create = (req, res, next) => {
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    insertEmployee(employee).then(result => {
        res.status(201).json({ data: result, message: "Success, creating Employee" });
    }, eMsg => {
        res.status(500).json({ data: { eid, ename }, message: "Error, creating Employee" });
    });
}

exports.update = (req, res, next) => {
    var rid = req.params.rid;

    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    updateEmployee(rid, employee).then(result => {
        res.status(200).json({ data: result, message: "Success, updating Employee" });
    }, eMsg => {
        res.status(500).json({ data: { eid, ename }, message: "Error, updating Employee" });
    });
}

exports.delete = (req, res, next) => {
    var rid = req.params.rid;

    deleteEmployee(rid).then(result => {
        res.status(200).json({ data: rid, message: "Success, deleting Employee" });
    }, eMsg => {
        res.status(500).json({ data: rid, message: "Error, deleting Employee" });
    });
}