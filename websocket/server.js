const express = require('express');
const WebSocket = require('ws');
const redis = require('redis');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

const client = redis.createClient(
   {
      // username: 'default', // use your Redis user. More info https://redis.io/docs/management/security/acl/
      // password: 'secret', // use your password here
      socket: {
         host: 'redis-database',
         port: 6379,
         // tls: true,
         // key: readFileSync('./redis_user_private.key'),
         // cert: readFileSync('./redis_user.crt'),
         // ca: [readFileSync('./redis_ca.pem')]
      }
   }
);

client.connect();

client.on('connect', () => {
   console.log('Connected to Redis');
});


client.on('error', (err) => {
   console.log('Redis error: ', err);
});

wss.on('connection', (ws) => {
   console.log('Client connected');

   ws.on('message', (message) => {
      console.log(`Received12: ${message}`);

      client.set('message', message);

      ws.send(`Hello, you sent -> ${message}`);
   });

   ws.on('close', () => {
      console.log('Client disconnected');
   });
});

server.listen(8080, () => {
   console.log('Server started on port 8080');
});
