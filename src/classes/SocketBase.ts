import { Server, Socket } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export default class SocketBase {
    socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;
    io: Server;

    constructor(socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, io: Server) {
        this.socket = socket;
        this.io = io;
    }
}