const express = require('express');
const { handleTask } = require('./controllers/taskController');
const app = express();
const port = 3001;

app.use(express.json());
app.post('/task', handleTask);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
