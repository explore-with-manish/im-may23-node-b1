const { getAllEmployees, getEmployee, deleteEmployee, insertEmployee, updateEmployee } = require("../data-access/employees-dal");

exports.index = (req, res, next) => {
    res.render('employees/index', { pageTitle: 'Employees View', empList: getAllEmployees() });
}

exports.details = (req, res, next) => {
    var id = req.params.rId;
    res.render('employees/details', { pageTitle: 'Employee Details View', employee: getEmployee(id) });
}

exports.create_get = (req, res, next) => {
    res.render('employees/create', { pageTitle: 'Employees Create View' });
}

exports.create_post = (req, res, next) => {
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    if (insertEmployee(employee)) {
        res.redirect('/employees');
    } else {
        res.render('employees/create', { pageTitle: 'Employees Create View' });
    }
}

exports.edit_get = (req, res, next) => {
    var id = req.params.rId;
    res.render('employees/edit', { pageTitle: 'Employee Edit View', employee: getEmployee(id) });
}

exports.edit_post = (req, res, next) => {
    var id = req.params.rId;
    var { eid, ename } = req.body;
    var employee = { id: parseInt(eid), name: ename };

    if (updateEmployee(id, employee)) {
        res.redirect('/employees');
    } else {
        res.render('employees/edit', { pageTitle: 'Employee Edit View', employee: getEmployee(id) });
    }
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