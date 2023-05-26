// const chokidar = require('chokidar');

// const watcher = chokidar.watch('./my-folder');

// watcher.on('add', (path) => { console.log(`File, ${path}, is created...`); });
// watcher.on('change', (path) => { console.log(`File, ${path}, is modified...`); });
// watcher.on('unlink', (path) => { console.log(`File, ${path}, is deleted...`); });

// console.log("Chokidar is on duty....");

// -------------------------------

const _ = require('lodash');

var employees = [{ id: 1, name: "Manish" },
{ id: 2, name: "Abhijeet" },
{ id: 3, name: "Ram" },
{ id: 4, name: "Abhishek" },
{ id: 5, name: "Ramakant" }];

console.log(_.last(employees));