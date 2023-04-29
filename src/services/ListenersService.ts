import { Server, Socket } from "socket.io";
import RoomController from "../controllers/RoomController";
import SessionController from "../controllers/SessionController";
import SocketBase from "../classes/SocketBase";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export default class ListenersService extends SocketBase {
    constructor(socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>, io: Server) {
        super(socket, io);
        this.initSessionListeners();
        this.initPrivateListeners();
    }

    initSessionListeners() {
        const sessionController = new SessionController(this.socket, this.io);
        sessionController.initSession();
    }

    initPrivateListeners() {
        const roomController = new RoomController(this.socket, this.io);
        roomController.initPrivate();
        roomController.initGroup();
    }
}