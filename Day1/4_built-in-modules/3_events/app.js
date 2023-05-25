const sEmitter = require('./string-emitter');

// var s = sEmitter.getString();
// console.log(s);

// setInterval(function () {
//     var s = sEmitter.getString();
//     console.log(s);
// }, 2000);

// Call 1 - 1000 ms
// Call 2 - 3000 ms
// Call 3 - 1000 ms

// -------------------------------------

// sEmitter.pushString(s => {
//     console.log(s);
// });

// sEmitter.pushString(s => {
//     console.log('S1 - ', s);
// });

// sEmitter.pushString(s => {
//     console.log('S2 - ', s);
// });

// -------------------------------------
sEmitter.on('data', (s) => {
    console.log('S1 - ', s);
});

// sEmitter.on('data', (s) => {
//     console.log('S2 - ', s);
// });

let count = 0;

function S2(s) {
    console.log('S2 - ', s);
    ++count;

    if (count > 2) {
        sEmitter.removeListener('data', S2);
    }
}

sEmitter.on('data', S2);