const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
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
});

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

// -------------------------------------------------- WebSocket Code

const WebSocketServer = require('websocket').server;
const sEmitter = require('./string-emitter');

const wsServer = new WebSocketServer({
    httpServer: server
});

let clients = [];
let count = 1;

sEmitter.on('data', (s) => {
    if (clients.length > 0) {
        for (const client of clients) {
            if (client) {
                client.sendUTF(s);
            }
        }
    }
});

wsServer.on('request', (req) => {
    let connection = req.accept('echo-protocol');
    // console.log(connection);

    let id = count++;
    clients[id] = connection;
    console.log(`Connect Accepted: [${id}]`);

    connection.on('message', (msg) => {
        console.log(`Client said : ${msg.utf8Data}`);
        connection.sendUTF("Data from Server");
    });

    connection.on('close', (msg) => {
        delete clients[id];
        console.log(`Connection Closed : [${id}]`);
    });
});