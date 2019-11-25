const http = require('http');
const express = require('express');
const path = require('path');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, 'public')));

//Créer un object javascript contenant nos utilisateurs

io.on('connection', socket => {
  // Code à écrire
});

const port = process.env.PORT || 3333;
server.listen(port, () => console.log(`Server is running on port ${port}...`));
