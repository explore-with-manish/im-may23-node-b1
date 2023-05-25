// require('./logger.js');
// require('./logger.js');

// const logger1 = require('./logger.js');
// const logger2 = require('./logger.js');

// console.log(logger1 === logger2);

// require('./logger.js');
// require('./second.js');

// --------------------------------------
// const logger = require('./logger');
// const logger = require('./logger/my-logger');
// const logger = require('./logger/index');
// const logger = require('./logger');

// --------------------------------------

// const loggerSingle = require('./loggerSingle');

// let l1 = loggerSingle.getLogger();
// l1.log('Hello from App Module');

// let l2 = loggerSingle.getLogger();
// l2.log('Hello from App Module');

// console.log(l1 === l2);

// --------------------------------------

// let l1 = require('./loggerS');
// l1.log('Hello from App Module');

// let l2 = require('./loggerS');
// l2.log('Hello from App Module');

// console.log(l1 === l2);

// --------------------------------------

const loggerFactory = require('./loggerFactory');

let dbLogger;
let flLogger;

dbLogger.log('Hello from App Module');
flLogger.log('Hello from App Module');

let dbLogger1;
let dbLogger2;

console.log(dbLogger1 === dbLogger2);