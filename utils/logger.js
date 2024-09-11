const fs = require('fs');

function logMessage(message) {
  fs.appendFile('app.log', message + '\n', (err) => {
    if (err) throw err;
  });
}

module.exports = { logMessage };
