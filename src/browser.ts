import { websocketEvents } from 'https://raw.githubusercontent.com/denyncrawford/websocket-iterator/master/src/websocket-iterator.ts'
import { 
  hasJsonStructure,
  connectWebSocket
 } from './helpers.ts'
import { 
  EventEmitter,
  v4
} from '../deps.ts'

export default class Dropper extends EventEmitter {
  public readonly uuid: string = v4.generate();
  public _socket: WebSocket | null = null;
  public readonly uri: string | null = null;
  constructor(arg?: string, private options?: any) {
    super();
    this.options = Object.assign({
      endpoint: '/dropper'
     }, this.options)
    this.uri = this.uri = arg ? arg + this.options.endpoint : 'ws://localhost:8080' + this.options.endpoint;
    connectWebSocket(this.uri).then((socket:WebSocket) => {
      this._socket = socket;
      this.init(this._socket);
    }).catch((err:any) => {
      console.log(err);
      this.emit("error", err);
    });
  }
  public async send(evt: string | Uint8Array | object, data?: string | Uint8Array | object): Promise<void> {
    let data_push: string = data ? JSON.stringify({ evt, data }) : JSON.stringify(evt);    
    if (this._socket !== null) this._socket.send(data_push)
  }
  public async broadcast(evt: string | Uint8Array | object, data?: string | Uint8Array | object): Promise<void> {    
    if (this._socket !== null) {
      let data_push: string = data ? JSON.stringify({ evt, data, client: this.uuid}) : JSON.stringify({ evt: '_all_', data: evt, client: this.uuid});
      if (this._socket !== null) await this.emit("_broadcast_", data_push)
    }
  }
  public async close(code: number = 1005, reason: string = ""): Promise<void> {
    if (this._socket !== null) {
      return await this._socket.close(code, reason);
    }
  }

  public async ping(data: number) {
    let ui: Uint8Array = new Uint8Array(data) || new Uint8Array(1)
    let arr:any = ['ping', ui]
    arr = JSON.stringify(arr)
    this?._socket?.send(arr)
  }

  public async pong(data:any) {
    const [, body] = data
    let arr:any = ['pong', data]
    arr = JSON.stringify(arr)
    this?._socket?.send(arr)
  }

  private async init(socket: WebSocket): Promise<void> {
    this.emit("open");
    socket.onclose = (ev) => {
      const { code, reason } = ev;
      this.emit("close", code, reason);
    }
    for await (const  { data: ev  } of websocketEvents(socket)) {
      try {
        this.emit("_all_", ev);
        if (hasJsonStructure(ev)) {
          let { evt, data } = JSON.parse(ev);
          this.emit(evt, data)
        } else {
           this.emit('message', ev)
        }
      } catch (e) {
        this.emit("error", e);
        await this.close(1000);
      }
    }
  }
}