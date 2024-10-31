const PORT = process.env.PORT || 3001;  // Use the environment port if provided
const server = require('http').createServer();  // Create an HTTP server
const WebSocket = require('ws');

// Attach WebSocket server to the HTTP server
const wss = new WebSocket.Server({ server });

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

// Start the HTTP server, which will also handle WebSocket connections
server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});
