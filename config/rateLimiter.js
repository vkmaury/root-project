const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiterPerSecond = new RateLimiterMemory({
  points: 1, 
  duration: 1,
});

const rateLimiterPerMinute = new RateLimiterMemory({
  points: 20, 
  duration: 60,
});

module.exports = { rateLimiterPerSecond, rateLimiterPerMinute };
