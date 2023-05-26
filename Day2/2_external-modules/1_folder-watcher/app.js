const chokidar = require('chokidar');

const watcher = chokidar.watch('./my-folder');

watcher.on('add', (path) => { console.log(`File, ${path}, is created...`); });
watcher.on('change', (path) => { console.log(`File, ${path}, is modified...`); });
watcher.on('unlink', (path) => { console.log(`File, ${path}, is deleted...`); });

console.log("Chokidar is on duty....");