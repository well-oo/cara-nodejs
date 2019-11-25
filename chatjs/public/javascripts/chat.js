const socket = io();
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const name = prompt('What is your name?');
appendMessage('You joined');
socket.emit('newUser', name);

socket.on('showMessage', data => {
    appendMessage(`${data.name}: ${data.message}`);
});

socket.on('serverMessage', message => {
   appendMessage(message);
});

socket.on('privateMessage', data => {
    appendMessage(`${data.name}: ${data.message}`, true);
});

messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('sendMessage', message);
    messageInput.value = '';
    messageInput.focus();
});

function appendMessage(message, private = false) {
    const messageElement = document.createElement('div');
    if(private){
        messageElement.style.color = "red";
    }
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}