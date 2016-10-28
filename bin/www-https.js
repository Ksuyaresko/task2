#!/usr/bin/env node

/**
 * Module dependencies.
 */

const app = require('../app');
const chalk = require('chalk');
const https = require('https');
const fs = require('fs');
const path = require('path');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3443');
app.set('port', port);

/*= {
 key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
 cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
 };
 */
const options = {
  key: fs.readFileSync(path.join(__dirname, '..', 'config', 'keys', 'server', 'privkey.pem'))
// You don't need to specify `ca`, it's done by `ssl-root-cas`
//  , ca: [ fs.readFileSync(path.join(__dirname, '..', 'config', 'keys','server', 'my-private-root-ca.cert.pem'))]
  , cert: fs.readFileSync(path.join(__dirname, '..', 'config', 'keys', 'server', 'fullchain.pem'))
};
/**
 * Create HTTP server.
 */

var server = https.createServer(options, app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + chalk.yellow(bind));
}
