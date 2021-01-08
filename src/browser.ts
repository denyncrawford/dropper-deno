import { websocketEvents } from 'https://raw.githubusercontent.com/denyncrawford/websocket-iterator/master/src/websocket-iterator.ts'
import { hasOwnProperty } from 'https://deno.land/std@0.83.0/_util/has_own_property.ts'
import { 
  hasJsonStructure,
  isArray
 } from '../helpers.ts'
import { 
  EventEmitter,
  v4
} from '../../deps.ts'

export default class Dropper extends EventEmitter {
  public readonly uuid: string = v4.generate();
  public _socket: WebSocket | null = null;
  public readonly uri: string | null = null;
  constructor(arg: string) {
    super();
    this.uri = arg;
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
    for await (const { data: ev } of websocketEvents(socket)) {   
      try {
        if (typeof ev === "string" && !isWebSocketPingEvent(ev)) {
          this.emit("_all_", ev);
          if (hasJsonStructure(ev)) {
            let { evt, data } = JSON.parse(ev);
            this.emit(evt, data)
          } else {
            this.emit('message', ev)
          }
        } else if (ev instanceof Uint8Array) {
          this.emit("_binary_", ev);
        } else if (isWebSocketPingEvent(ev)) { 
          const [, body] = ev;
          this.pong(body)
          this.emit("_ping_", body);
        } else if (isWebSocketCloseEvent(ev)) {
          const { code, reason } = ev;
          this.emit("close", code, reason);
        } else if (isWebSocketPongEvent(ev)) {
          const [, body] = ev;
          this.emit("_pong_", body);
        }
      } catch (e) {
        this.emit("error", e);
        await this.close(1000);
      }
    }
  }
}

// Utils

function isWebSocketPongEvent(a: any) {
  let newArr = typeof a === 'string' && isArray(a) ? JSON.parse(a).map( (e: string | object) => {
    if (typeof e !== "object") return e
    else return new Uint8Array(1)
  }) : a;
  return Array.isArray(newArr) && newArr[0] === "pong" && newArr[1] instanceof Uint8Array;
}

function isWebSocketPingEvent(a: any) {
  let newArr = typeof a === 'string' && isArray(a) ? JSON.parse(a).map( (e: string | object) => {
    if (typeof e !== "object") return e
    else return new Uint8Array(1)
  }) : a;
  return Array.isArray(newArr) && newArr[0] === "ping" && newArr[1] instanceof Uint8Array;
}

function isWebSocketCloseEvent( a: any) {
  return hasOwnProperty(a, "code");
}

function connectWebSocket(endpoint: string | undefined): Promise<WebSocket> {
  return new Promise(function(resolve, reject) {
    const url = endpoint ? new URL(endpoint) : new URL('ws://localhost:8080');
    const { hostname, protocol, port } = url
    let p: string;
    if (protocol === 'http:') p = 'ws://'
    else if (protocol === 'https:') p = 'wss://'
    else if (protocol === 'ws:' || protocol === 'wss:') p = protocol + '//'
    else throw new Error("ws: unsupported protocol: " + url.protocol);
    const uri = `${p+hostname}:${port}`
    let socket = new WebSocket(uri);
    socket.onopen = () => {          
      resolve(socket);
    };
    socket.onerror = (err:any) => {
      reject(err);
    };
  });
}