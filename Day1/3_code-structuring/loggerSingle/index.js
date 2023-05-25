const Logger = require('./logger');
let logger;

module.exports.getLogger = function() {
    if(!logger)
        logger = new Logger();
    return logger;
}