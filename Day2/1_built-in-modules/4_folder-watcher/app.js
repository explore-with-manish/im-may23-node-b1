const fs = require('fs');

const folderPath = './my-folder';

const folderWatcher = fs.watch(folderPath, (eventType, filename) => {
    console.log(`${filename} is ${eventType}d`);
});

folderWatcher.on('error', (err) => {
    console.error(err);
});

console.log("Folder Watcher Started...");