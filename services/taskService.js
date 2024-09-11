const { Queue } = require('bullmq');
const redisClient = require('../config/redis');
const fs = require('fs');

const queue = new Queue('taskQueue', { connection: redisClient });

async function enqueueTask(user_id) {
  await queue.add('task', { user_id });
}

async function processTask(user_id) {
  const logMessage = `${user_id}-task completed at-${Date.now()}\n`;
  fs.appendFile('task.log', logMessage, (err) => {
    if (err) throw err;
  });
  console.log(logMessage);
}

module.exports = { enqueueTask, processTask };
