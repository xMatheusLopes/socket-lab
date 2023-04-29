import express from 'express';
import http from 'http';
import path from 'path';
import { Server, Socket } from 'socket.io';
import ListenersService from './services/ListenersService';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

const app = express();
const server = http.createServer(app);
const io: Server = new Server(server);

app.get('/', (req: any, res: any) => {
    res.sendFile(path.resolve(__dirname, './templates/index.html'));
});

io.on('connection', (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
    console.log('a user connected');

    new ListenersService(socket, io);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});