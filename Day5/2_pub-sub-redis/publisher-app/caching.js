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

function publish(channel, message) {
    try {
        redis.publish(channel, message);
    } catch (err) {
        return null;
    }
}

module.exports = { publish };