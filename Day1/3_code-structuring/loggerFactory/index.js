exports.DBLFactory = {
    getLogger: function () {
        const DBLogger = require('./db-logger');
        return new DBLogger();
    }
};

exports.FLFactory = {
    getLogger: function () {
        const FileLogger = require('./file-logger');
        return new FileLogger();
    }
};