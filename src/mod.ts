import { hasJsonStructure } from './helpers.ts'
import { WebSocket } from "https://deno.land/std@0.63.0/ws/mod.ts";
import { 
  EventEmitter, 
  v4, 
  serve,
  acceptWebSocket,
  connectWebSocket,
  isWebSocketCloseEvent,
  isWebSocketPingEvent,
  isWebSocketPongEvent,
} from '../deps.ts'

class Dropper extends EventEmitter {
  public readonly uuid: string = v4.generate();
  public _socket: WebSocket | null = null;
  public readonly uri: string | null = null;
  constructor(arg: WebSocket | string) {
    super();
    if (typeof arg === "string") {
      this.uri = arg;
      connectWebSocket(this.uri).then((socket) => {
        this._socket = socket;
        this.init(this._socket);
      }).catch((err) => {
        this.emit("error", err);
      });
    } else {
      this._socket = arg;
      this.uri = arg.conn.remoteAddr.transport;
      this.init(this._socket);
    }
  }
  public async send(evt: string | Uint8Array | object, data?: string | Uint8Array | object): Promise<void> {
    let data_push: string = data ? JSON.stringify({ evt, data }) : JSON.stringify(evt);    
    if (this._socket !== null) await this._socket.send(data_push)
  }
  public async broadcast(evt: string | Uint8Array | object, data?: string | Uint8Array | object): Promise<void> {    
    if (this._socket !== null) {
      let data_push: string = data ? JSON.stringify({ evt, data, client: this.uuid}) : JSON.stringify({ evt: 'message', data: evt, client: this.uuid});
      if (this._socket !== null) await this.emit("dropper_broadcast", data_push)
    }
  }
  public async close(code: number = 1005, reason: string = ""): Promise<void> {
    if (this._socket !== null) {
      return await this._socket.close(code, reason).catch(console.error);
    }
  }
  private async init(socket: WebSocket): Promise<void> {
    this.emit("open");
    for await (const ev of socket) {
      try {
        if (typeof ev === "string") {
          this.emit("message", ev);
          if (hasJsonStructure(ev)) {
            let { evt, data } = JSON.parse(ev);
            this.emit(evt, data)
          }
        } else if (ev instanceof Uint8Array) {
          this.emit("binary", ev);
        } else if (isWebSocketPingEvent(ev)) {
          const [, body] = ev;
          this.emit("ping", body);
        } else if (isWebSocketCloseEvent(ev)) {
          const { code, reason } = ev;
          this.emit("close", code, reason);
        } else if (isWebSocketPongEvent(ev)) {
          const [, body] = ev;
          this.emit("pong", body);
        }
      } catch (e) {
        this.emit("error", e);
        await this.close(1000);
      }
    }
  }
}

 class Server extends EventEmitter {
   private willClose: boolean = false;
   public clients: Map<string, Dropper> = new Map();
   constructor(
     public readonly host: string = "localhost",
     public readonly port: number = 8080,
   ) {
     super();
     this.init();
   }
   public async send(evt: string | Uint8Array | object, data ? : string | Uint8Array | object): Promise < void > {
     let data_push: string = data ? JSON.stringify({
       evt,
       data
     }) : JSON.stringify(evt);
     this.clients.forEach(async (client) => {
       if (client._socket !== null) await client._socket.send(data_push)
     })
   }
   private async init(): Promise < void > {
     for await (const req of serve(`${this.host}:${this.port}`)) {
       if (this.willClose) break;
       const {
         headers,
         conn
       } = req;
       acceptWebSocket({
           conn,
           headers,
           bufReader: req.r,
           bufWriter: req.w,
         })
         .then(
           async (sock: WebSocket): Promise < void > => {
             let client: Dropper | null = new Dropper(sock);
             const uuid = client.uuid;
             this.clients.set(client.uuid, client);
             client.on("close", (code, reason) => {
               this.clients.delete(uuid);
               client = null;
             });
             client.on('message', ev => {
              this.emit("message", ev);
              if (hasJsonStructure(ev)) {
                let { evt, data } = JSON.parse(ev);
                this.emit(evt, data)
              }
             })
             client.on("dropper_broadcast", async data => {
               let data_send = JSON.parse(data)
               this.clients.forEach(async (c) => {
                 if (data_send.client !== c.uuid) {
                   await c?._socket?.send(data)
                 }
               })
             })
             const allowConnect = this.emit("connection", client);
             if (allowConnect !== undefined && !allowConnect) {
               await client.close(1002, "Access Denied");
             }
           }
         )
         .catch((err: Error): void => {
           this.emit("error", err);
         });
     }
   }
 }

export default Dropper;

export {
  Server,
  Dropper
}
