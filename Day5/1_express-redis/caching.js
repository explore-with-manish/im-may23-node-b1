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

function setCache(key, data, ttl = REDIS_TTL) {
    try {
        redis.set(key, JSON.stringify(data), "EX", ttl);
    } catch (err) {
        return null;
    }
}

function removeCache(key) {
    try {
        redis.del(key);
    } catch (err) {
        return null;
    }
}

async function getCache(key) {
    try {
        const data = await redis.get(key);
        return data;
    } catch (err) {
        return null;
    }
}

module.exports = { getCache, setCache, removeCache };