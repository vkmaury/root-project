const { Worker } = require('bullmq');
const { processTask } = require('../services/taskService');
const redisClient = require('../config/redis');

const worker = new Worker('taskQueue', async job => {
  await processTask(job.data.user_id);
}, { connection: redisClient });

worker.on('completed', (job) => {
  console.log(`Job completed with id ${job.id}`);
});

worker.on('failed', (job, err) => {
  console.error(`Job failed with id ${job.id} and error ${err.message}`);
});
