const Redis = require('ioredis');
const redis = new Redis('redis://default:redispw@localhost:7001');

redis.on('connect', () => {
    console.log('Connected to Redis');
});

redis.on('error', (error) => {
    console.log('Redis Error: ', error);
});

// redis.set('name', 'Manish');
// redis.get('name', (err, result) => {
//     console.log('Name: ', result);
// })

// redis.rpush('employees', 'Abhishek', 'Aditi');
// redis.lrange('employees', 0, -1, (err, result)=>{
//     console.log('Employees: ', result);
// });

// redis.smembers('colors', (err, result)=>{
//     console.log('Colors: ', result);
// });

// redis.hset('user:1', 'name', 'Manish');
// redis.hset('user:1', 'city', 'Pune');
// redis.hset('user:1', 'state', 'MH');
// redis.hset('user:1', 'country', 'IN');

// // redis.hget('user:1', 'name').then(result=>{
// //     console.log('Name: ', result);
// // })

// redis.hgetall('user:1').then(result => {
//     console.log('Result: ', result);
// })

// Transaction

// redis.multi()
//     .set('one', '1')
//     .set('two', '2')
//     .get('one')
//     .get('two')
//     .exec()
//     .then(results => {
//         console.log('Results:', results);
//     });