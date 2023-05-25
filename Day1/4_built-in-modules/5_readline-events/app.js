// read input from the user line by line and write it on the file

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const fileStream = fs.createWriteStream('./output.txt');

console.log('\nWaiting for the Input: \n');

rl.on('line', (input) => {
    fileStream.write(input + '\n');
});

rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? ', (answer) => {
        if (answer.match(/^y(es)?$/i)) {
            rl.close();
        }
    });
});

rl.on('close', (input) => {
    fileStream.end();
    console.log('Input written to output.txt');
});