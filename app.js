// Madusha Wijesinghe (M23W0114)

const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');
const historyButton = document.getElementById('history');
const jsonHistory = document.getElementById('json-history');
const typingIndicator = document.getElementById('typing-indicator');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
  socket.emit('stop typing');
  typing = false;
});

input.addEventListener('input', () => {
  if (!typing) {
    typing = true;
    socket.emit('typing');
  }
  lastTypingTime = (new Date()).getTime();

  setTimeout(() => {
    const typingTimer = (new Date()).getTime();
    const timeDiff = typingTimer - lastTypingTime;
    if (timeDiff >= 4000 && typing) {
      socket.emit('stop typing');
      typing = false;
    }
  }, 4000);
});

historyButton.addEventListener('click', () => {
  socket.emit('get history');
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = `${msg.timestamp} - ${msg.text}`;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on('chat history', (history) => {
  jsonHistory.textContent = JSON.stringify(history, null, 2);
});

socket.on('chat history', (history) => {
  messages.innerHTML = ''; // Clear existing messages
  history.forEach((msg) => {
    const item = document.createElement('li');
    item.textContent = `${msg.timestamp} - ${msg.text}`;
    messages.appendChild(item);
  });
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on('typing', (message) => {
  typingIndicator.textContent = message;
});

socket.on('stop typing', () => {
  typingIndicator.textContent = '';
});