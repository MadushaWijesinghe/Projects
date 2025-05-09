// Madusha Wijesinghe (M23W0114)

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

let chatHistory = [];

io.on('connection', (socket) => {
  console.log('New user connected');

  // Send chat history to the newly connected user
  socket.emit('chat history', chatHistory);

  // Handle incoming chat messages
  socket.on('chat message', (msg) => {
    const message = {
      text: msg,
      timestamp: new Date().toLocaleTimeString() // Add timestamp
    };
    chatHistory.push(message);
    io.emit('chat message', message);
  });

  socket.on('typing', () => {
    socket.broadcast.emit('typing', 'A user is typing...');
  });

  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing');
  });

  // Handle request for chat history
  socket.on('get history', () => {
    socket.emit('chat history', chatHistory);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
