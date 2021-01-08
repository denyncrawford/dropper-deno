import { 
  createWebSocket, 
  handshake,
  BufReader,
  BufWriter
} from '../deps.ts'
import { WebSocket } from "https://deno.land/std@0.83.0/ws/mod.ts";

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

function createMask(): Uint8Array {
  return crypto.getRandomValues(new Uint8Array(4));
}

export async function connectWebSocket(
  endpoint: string | null,
  headers: Headers = new Headers(),
): Promise<WebSocket> {
  const url = endpoint ? new URL(endpoint) : new URL('ws://localhost:8080');
  const { protocol, hostname } = url;
  let conn: Deno.Conn;
  if (protocol === "http:" || protocol === "ws:") {
    const port = parseInt(url.port || "8080");
    conn = await Deno.connect({ hostname, port });
  } else if (protocol === "https:" || protocol === "wss:") {
    const port = parseInt(url.port || "443");
    conn = await Deno.connectTls({ hostname, port });
  } else {
    throw new Error("ws: unsupported protocol: " + protocol);
  }
  const bufWriter = new BufWriter(conn);
  const bufReader = new BufReader(conn);
  try {
    await handshake(url, headers, bufReader, bufWriter);
  } catch (err) {
    conn.close();
    throw err;
  }
  const sock:WebSocket = createWebSocket({
    conn,
    bufWriter,
    bufReader,
    mask: createMask(),
  });  
  return sock
}