const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('session', (data) => {
        socket.join([data.id, 'group']);
        io.to(data.id).emit('joined', data.id);
    })

    socket.on('private', (data) => {
        io.to(data.to).emit('message', data.msg);
        io.to('group').emit('message', '[group]' + data.msg);
    })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});