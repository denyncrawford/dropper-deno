import { Server } from '../../src/mod.ts'

const dropper = new Server();

dropper.on('connection', socket => {
    console.log(socket.uuid);
})