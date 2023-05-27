let employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

exports.getAllEmployees = function () {
    return employees;
}

exports.getEmployee = function (id) {
    return employees.find(e => e.id === parseInt(id));
}

exports.insertEmployee = function (employee) {
    employees = [...employees, { ...employee }];
    return true;
}

exports.updateEmployee = function (id, employee) {
    var itemIndex = employees.findIndex(e => e.id === parseInt(id));
    var tempEmployees = [...employees];
    tempEmployees.splice(itemIndex, 1, { ...employee });
    employees = [...tempEmployees];
    return true;
}

exports.deleteEmployee = function (id) {
    employees = [...employees.filter(e => e.id !== parseInt(id))];
    return true;
}