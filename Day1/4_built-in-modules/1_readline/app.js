const readline = require('readline');
// console.log(readline);

const rl = readline.createInterface({
    input: process.stdin,           // ReadStream
    output: process.stdout          // WriteStream
});

// rl.question('Enter a number: ', (input) => {
//     console.log(`You entered: ${input}`);
//     rl.close();
// });

// console.log('\n------------------------- Last Line ----------------------------\n');
// rl.close();

// rl.question('Enter the first number: ', (input1) => {
//     rl.question('Enter the second number: ', (input2) => {
//         var sum = parseInt(input1) + parseInt(input2);
//         console.log(`Result is: ${sum}`);
//         rl.close();
//     });
// });

// ---------------------------------------------------- Implement the above code using Promise

// function enterNumberOne() {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter the first number: ', (input) => {
//             var num1 = parseInt(input);
//             resolve(num1);
//         });
//     });
// }

// function enterNumberTwo(num1) {
//     return new Promise((resolve, reject) => {
//         rl.question('Enter the second number: ', (input) => {
//             var num2 = parseInt(input);
//             resolve([num1, num2]);
//         });
//     });
// }

// function add([n1, n2]) {
//     var sum = n1 + n2;
//     console.log(`Result is: ${sum}`);
//     rl.close();
// }

// enterNumberOne().then(enterNumberTwo).then(add);

// ------------------------------------------

function enterNumber(message) {
    return new Promise((resolve, reject) => {
        rl.question(message, (input) => {
            var num = parseInt(input);
            resolve(num);
        });
    });
}

// enterNumber('Enter the first number: ').then(n1 => {
//     enterNumber('Enter the second number: ').then(n2 => {
//         var sum = n1 + n2;
//         console.log(`Result is: ${sum}`);
//         rl.close();
//     });
// });

(async function(){
    var n1 = await enterNumber('Enter the first number: ');
    var n2 = await enterNumber('Enter the second number: ');
    var sum = n1 + n2;
    console.log(`Result is: ${sum}`);
    rl.close();
})();