import SocketBase from "../classes/SocketBase";
import SessionService from "../services/SessionService";

export default class SessionController extends SocketBase {
    initSession() {
        this.socket.on('session', (data: any) => {
            const sessionService = new SessionService(this.socket, this.io);
            sessionService.initSession(data);
            this.io.to(data.id).emit('joined', data.id);
        })
    }
}