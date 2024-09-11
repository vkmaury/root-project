const Redis = require('redis');
const redisClient = Redis.createClient();

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

module.exports = redisClient;
