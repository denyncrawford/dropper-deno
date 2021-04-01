import { hasOwnProperty } from 'https://deno.land/std@0.83.0/_util/has_own_property.ts'
export function hasJsonStructure (str: string): Boolean {
  if (typeof str !== 'string') return false;
  try {
      const result = JSON.parse(str);
      const type = Object.prototype.toString.call(result);
      return type === '[object Object]' 
          || type === '[object Array]';
  } catch (err) {
      return false;
  }
}

export function isArray (str: string) {
  if (typeof str !== 'string') return false;
  try {
      const result = JSON.parse(str);
      const type = Object.prototype.toString.call(result);
      return type === '[object Array]';
  } catch (err) {
      return false;
  }
}

export function connectWebSocket(endpoint: string, id: string): Promise<WebSocket> {
  return new Promise(function(resolve, reject) {
    const url = new URL(endpoint)
    const { hostname, protocol, port, pathname } = url
    let p: string;
    if (protocol === 'http:') p = 'ws://'
    else if (protocol === 'https:') p = 'wss://'
    else if (protocol === 'ws:' || protocol === 'wss:') p = protocol + '//'
    else throw new Error("ws: unsupported protocol: " + url.protocol);
    const uri = `${p+hostname}:${port + pathname}?id=${id}`    
    let socket = new WebSocket(uri);
    socket.onopen = () => {          
      resolve(socket);
    };
    socket.onerror = (err:any) => {
      reject(err);
    };
  });
}

export function isWebSocketPongEvent(a: any) {
  let newArr = typeof a === 'string' && isArray(a) ? JSON.parse(a).map( (e: string | object) => {
    if (typeof e !== "object") return e
    else return new Uint8Array(1)
  }) : a;
  return Array.isArray(newArr) && newArr[0] === "pong" && newArr[1] instanceof Uint8Array;
}

export function isWebSocketPingEvent(a: any) {
  let newArr = typeof a === 'string' && isArray(a) ? JSON.parse(a).map( (e: string | object) => {
    if (typeof e !== "object") return e
    else return new Uint8Array(1)
  }) : a;
  return Array.isArray(newArr) && newArr[0] === "ping" && newArr[1] instanceof Uint8Array;
}

export function isWebSocketCloseEvent( a: any) {
  return hasOwnProperty(a, "code");
}