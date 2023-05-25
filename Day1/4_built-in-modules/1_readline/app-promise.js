const readline = require('readline').promises;

const rl = readline.createInterface({
    input: process.stdin,           // ReadStream
    output: process.stdout          // WriteStream
});

(async function () {
    var n1 = await rl.question('Enter the first number: ');
    var n2 = await rl.question('Enter the second number: ');
    var sum = parseInt(n1) + parseInt(n2);
    console.log(`Result is: ${sum}`);
    rl.close();
})();