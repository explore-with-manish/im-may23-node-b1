exports.index = (req, res, next) => {
    res.render('employees/index', { pageTitle: 'Employees View' });
}