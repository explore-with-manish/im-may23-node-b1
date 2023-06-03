const Redis = require('ioredis');
const { REDIS_HOST, REDIS_PORT, REDIS_TIMEOUT, REDIS_TTL } = process.env;

let redis;

(async () => {
    redis = new Redis({
        host: REDIS_HOST,
        port: REDIS_PORT,
        commandTimeout: REDIS_TIMEOUT
    });

    redis.on('error', (err) => {
        console.log('Redis Error: ', err);
    });

    redis.on('connect', () => {
        console.log('Connected to REDIS Server');
    });
})();

function subscribe(channel) {
    redis.subscribe(channel, (err) => {
        if (err) {
            console.error('Error subscribing:', err);
            return;
        }
        console.log('Subscribed to channel, listening for messages...\n');
    });

    redis.on('message', (channel, message) => {
        console.log(`Received message from channel '${channel}': ${message}`);
    });
}

module.exports = { subscribe };