const fs = require('fs');

// Async - Non Blocking
// fs.readFile('file1.txt', 'utf-8', (err, data) => {
//     if (err)
//         console.error(err);
//     else
//         console.log(data);
// });

// Sync - Blocking
// try {
//     var data = fs.readFileSync('./file1.txt', 'utf-8');
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }

// ------------------------------------
// var message = "Hello from Node Application\n";

// fs.writeFile('file2.txt', message, 'utf-8', (err) => {
//     if (err)
//         console.error(err);
//     else
//         console.log("File Write Completed...");
// });

// console.log("Completed and Waiting.....");

// ------------------------------------
var message = "Hello from Node Application\n";

fs.appendFile('file3.txt', message, 'utf-8', (err) => {
    if (err)
        console.error(err);
    else
        console.log("File Append Completed...");
});

console.log("Completed and Waiting.....");