const { getAllEmployees, getEmployee, deleteEmployee } = require("../data-access/employees-dal");

exports.index = (req, res, next) => {
    res.render('employees/index', { pageTitle: 'Employees View', empList: getAllEmployees() });
}

exports.details = (req, res, next) => {
    var id = req.params.rId;
    res.render('employees/details', { pageTitle: 'Employee Details View', employee: getEmployee(id) });
}

exports.delete_get = (req, res, next) => {
    var id = req.params.rId;
    res.render('employees/delete', { pageTitle: 'Employee Delete View', employee: getEmployee(id) });
}

exports.delete_post = (req, res, next) => {
    var id = req.params.rId;

    if (deleteEmployee(id)) {
        res.redirect('/employees');
    } else {
        res.render('employees/delete', { pageTitle: 'Employee Delete View', employee: getEmployee(id) });
    }
}