// const http = require('http');

// const server = http.createServer((req, res) => {
//     // console.log(req.url);
//     // res.end('Response from Node Http Server');

//     // res.setHeader('content-type', 'text/html');
//     // res.setHeader('content-type', 'text/plain');
//     // res.setHeader('content-type', 'application/json');
//     res.setHeader('content-type', 'application/pdf');

//     res.write('<h1>Response from Node Http Server</h1>');
//     res.end();
// });

// server.listen(3000);

// function onError(err) {
//     console.log(err);
// }

// function onListening() {
//     var address = server.address();
//     console.log(`Server started on port: ${address.port}`);
// }

// server.on('error', onError);
// server.on('listening', onListening);

// -------------------------------------------------

const http = require('http');
const fs = require('fs');

const reqHandler = (req, res) => {
    fs.readFile('./index.html', 'utf-8', (err, htmlContent) => {
        if (err) {
            res.setHeader('content-type', 'text/plain');
            res.statusCode = 404;
            res.end("Page Not Found...");
        } else {
            res.setHeader('content-type', 'text/html');
            res.statusCode = 200;
            res.write(htmlContent);
            res.end();
        }
    });
};

const server = http.createServer(reqHandler);

server.listen(3000);

function onError(err) {
    console.log(err);
}

function onListening() {
    var address = server.address();
    console.log(`Server started on port: ${address.port}`);
}

server.on('error', onError);
server.on('listening', onListening);