const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;
const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
    ws.send(`You said: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);
