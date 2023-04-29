import SocketBase from "../classes/SocketBase";

export default class RoomController extends SocketBase {
    initPrivate() {
        this.socket.on('private', (data: any) => {
            console.log('Sending private');
            this.io.to(data.to).emit('message', data.msg);
        })
    }

    initGroup() {
        this.socket.on('group', (data: any) => {
            console.log('Sending group');
            this.io.to('group').emit('message', '[group]' + data.msg);
        })
    }
}