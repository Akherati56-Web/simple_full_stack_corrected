const express = require('express');
const WebSocket = require('ws');
const redis = require('redis');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

const client = redis.createClient({
 host: 'redis-database',
 port: 6379,
});

client.on('connect', () => {
 console.log('Connected to Redis');
});

client.on('error', (err) => {
 console.log('Redis error: ', err);
});

wss.on('connection', (ws) => {
 console.log('Client connected');

 ws.on('message', (message) => {
    console.log(`Received: ${message}`);

    // Save the message to Redis
    client.set('test', message);

    ws.send(`Hello, you sent -> ${message}`);
 });

 ws.on('close', () => {
    console.log('Client disconnected');
 });
});

server.listen(8080, () => {
 console.log('Server started on port 8080');
});
