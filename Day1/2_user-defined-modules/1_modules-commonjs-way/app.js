// Import an entire module for side effects only, without importing anything. 
// This runs the module's global code, but doesn't actually import any values.
// require('./lib.js');

// const lib = require('./lib.js');
// // console.log(lib);
// console.log(lib.firstname);
// console.log(lib.lastname);
// console.log(lib.hello("Hi from App Module"));

const myModule = require('./lib.js');
console.log(myModule.firstname);
console.log(myModule.lastname);
console.log(myModule.hello("Hi from App Module"));