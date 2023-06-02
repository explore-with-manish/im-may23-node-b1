const path = require('path');

exports.index = (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'views', 'employees', 'index.html'));
}