const express = require('express');

const HOST = '0.0.0.0';
const PORT = 3000;

const app = express();
app.get('/', (req, res) => {
  res.send('Hello from Melissa');
});

// app.use(express.static('public'));
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))

// app.set('views', './views');



app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

// Bret Fisher: Docker for Node.js course Video 25
// quit on ctrl-c when running docker in terminal
process.on("SIGINT", function onSigint() {
  console.info("Got SIGINT (aka ctrl-c in docker). Graceful shutdown ", new Date().toISOString());
  shutdown();
});

// quit properly on docker stop
process.on("SIGTERM", function onSigterm() {
  console.info("Got SIGTERM (docker container stop). Graceful shutdown ", new Date().toISOString());
  shutdown();
});

// shut down server
function shutdown() {
  // NOTE: server.close is for express based apps
  // If using hapi, use `server.stop`
  server.close(function onServerClosed(err) {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
    process.exit();
  })
};
// END Bret Fisher