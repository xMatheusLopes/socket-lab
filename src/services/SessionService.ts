import SocketBase from "../classes/SocketBase";

export default class SessionService extends SocketBase {
    initSession(data: any) {
        this.socket.join([data.id, 'group']);
    }
}