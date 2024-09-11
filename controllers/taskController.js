const { rateLimiterPerSecond, rateLimiterPerMinute } = require('../config/rateLimiter');
const { enqueueTask } = require('../services/taskService');

async function handleTask(req, res) {
  const { user_id } = req.body;

  try {
    await rateLimiterPerSecond.consume(user_id); // 1 task per second
    await rateLimiterPerMinute.consume(user_id); // 20 tasks per minute

    // Queue the task
    enqueueTask(user_id);

    res.status(200).send('Task added to queue');
  } catch (err) {
    if (err instanceof Error) {
      res.status(429).send('Rate limit exceeded');
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
}

module.exports = { handleTask };
