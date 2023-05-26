const { getAllEmployees } = require('../data-access/employee-da');

exports.index = (req, res, next) => {
    res.render("employees/index", { pageTitle: "Employees View", empList: getAllEmployees() });
};