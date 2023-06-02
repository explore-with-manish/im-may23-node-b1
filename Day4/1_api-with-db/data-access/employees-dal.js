const Employee = require('../models/employee');

exports.getAllEmployees = async function () {
    try {
        const allEmployees = await Employee.find();
        return allEmployees;
    } catch (error) {
        throw new Error(`Could not fetch Employees ${error}`);
    }
}

exports.getEmployee = async function (recordId) {
    try {
        const singleEmployee = await Employee.findById({ _id: recordId });
        return singleEmployee;
    } catch (error) {
        throw new Error(`Could not fetch Employee ${error}`);
    }
}

exports.insertEmployee = async function (employee) {
    try {
        const response = await new Employee(employee).save();
        return response;
    } catch (error) {
        throw new Error(`Could not create Employee ${error}`);
    }
}

exports.updateEmployee = async function (recordId, employee) {
    try {
        const response = await Employee.findOneAndUpdate({ _id: recordId }, employee);
        return response;
    } catch (error) {
        throw new Error(`Could not update Employee ${error}`);
    }
}

exports.deleteEmployee = async function (recordId) {
    try {
        const response = await Employee.findOneAndDelete({ _id: recordId });
        return response;
    } catch (error) {
        throw new Error(`Could not delete Employee ${error}`);
    }
}