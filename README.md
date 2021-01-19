# Dropper

Dropper is a custom **Event-driven WebSocket framework** for Deno, using the deno-std ws module as base.

> Send and receive notifications, messages, updates and any data, all in real-time with custom events and methods served on your own, Dropper is Open Source, self-served and FREE forever!

## What can I do with Dropper?

Since Dropper is a WebSocket solution for transporting data between servers and clients, you can do whatever you need to go on real-time, like chat apps, trading, bots, database and website hot refreshs, etc. It's Side by Side APIs are designed to handle custom events sent by the application peers, you can work with the structured event handlers that allows to send and receive filtered data in a woshhh.

## Quick Demo

The chat test on this repo [lives on glitch](https://deno-dropper.glitch.me/), and you can test the app in production, but you can also run the demo on your local machine:

```bash
deno run -A https://deno.land/x/dropper@1.9.0/examples/chat/src/server.js
```

> It will start a server on 8080 port

## Importing

**Server:**

```ts
import { Server } from 'https://deno.land/x/dropper@1.9.0/src/mod.ts';
//or
import { Server } from 'https://x.nest.land/dropper@1.9.0/src/mod.ts'
```

**Deno client:**

You can import the client directly on your Deno app.

```ts
import Dropper from 'https://deno.land/x/dropper@1.9.0/src/mod.ts';
//or
import Dropper from 'https://x.nest.land/dropper@1.9.0/src/mod.ts'
```

**Browser client**

You can import this client on the browser in a module script.

```ts
import Dropper from 'https://deno.land/x/dropper@1.9.0/dist/clients/dropper.js';
//or
import Dropper from 'https://x.nest.land/dropper@1.9.0/dist/clients/dropper.js'
```

## Usage

By default, you can use two instances of Dropper, the server and the client. The API is very similar to the EventEmitter API, but it is WebScoekts using on custom events.

## Server:

The server waits for socket connections using the global event `connection`. This event gets the new connected socket on its callback. This socket represents a client so the API is the same as in the client side.

### Stand alone server

Dropper is stand alone by default, which means that you don't need to provide an http server, when you create a dropper it serves by default on port 8080. 

> This is useful whe you are creating an app without a server side.

```javascript

const options;

const dropper = new Server(options); // Creates a default server on port 8080

dropper.on('connection', socket => { // W
  socket.send('pizza', 'I sent you a pizza!')
  socket.on('thanks', data => {
    console.log(data) // => Thanks btw
  })
})

// Listening for global events

dropper.on('thanks', data => {
  console.log(data) // => Thanks btw
})

```

### Middleware server

You can also use Dropper with a server/framework setup since it handles each request separately with the method `Dropper.handle(req)`

- **Using a framework like opine**:

```javascript
import { opine } from 'https://deno.land/x/opine/mod.ts'
const app = opine();
import { Server as Dropper } from '...'

const dropper = new Dropper({
  serve: false // Important
})

app.use('/dropper', (req) => dropper.handle(req)); // Don't respond or call next, just use the request.

app.get('/', (req, res) => {
  //...foo
})

dropper.on('connection', socket => {
  ..foo
})

app.listen(3000)

``` 

- **Using the Deno's std http server**:

```javascript
import { serve } from 'https://deno.land/std/http/server.ts'
import { Server as Dropper } from '...'

const server = serve('localhost:3000')

const dropper = new Dropper({
  serve: false // Important
})

dropper.on('connection', socket => {
  ..foo
})

for await (const req of server) {
  if (req.url === '/dropper') {
    dropper.handle(req);
  } else {
    // return static content, etc
  }
}

```

> Please note that we use the `/dropper` endpoint on both of the examples. This is because we don't want to touch any usable endpoint, you can use whatever you want as endpoint, but you have to provide it in the Dropper **client** config object which is by default `/dropper`.

### Options (optional) 

- `host`: The host you want to use if the serve option is true. 
  - Default: 'localhost',
- `port`: The host you want to use if the serve option is true
  - Default: 8080,
- `interval`: The ping interval in ms.
  - Default: 3000
- `serve`: Set false if you don't want to serve Dropper (stand alone) - Using with your own http server.
  - Default: true

### API

**Methods**:

  - `Dropper.on` - Listen for the server events.

    The `on` method receives two arguments:

      - `event` - The event name
      - `callback` - Callback function to get the new connected socket instance if the event is `connection` or the event data if the event is `any`. 
  
  - `Dropper.send` - Send global data to all connected sockets
    
    The `send` method receive two arguments.

      - Argument1: `event` | `data` - This argument changes to data if the data argument is not provided, by default it is the event name.
      - `data` (optional) - This is the data to be sent.

  - `Dropper.handle` - Handles the request to accept WebSockets

    The `handle` method receive one arguments.

      - `request` - This is a deno std http request object of the type `ServerRequest`.

**Properties**:

  - `Dropper.clients` - List of all connected clients instances.

### Sending data to clients

You can send data to clients in three ways:

- **Just to the current socket**:

```javascript
dropper.on('connection', socket => {
  socket.send('hello')
})
```

No one will receive this data except the current socket.

- **To all sockets but the current one**:

```javascript
dropper.on('connection', socket => {
  socket.broadcast('hello')
})
```

All clients will receive the data except the current client.

- **To all connected sockets**:

```javascript
dropper.send('hello')
```

All clients will receive the data .

### Listening for client events

- **All events from current socket or globally**:

The event name for listening to all events is `_all_`

```javascript
dropper.on('connection', socket => {
  socket.on('_all_', data => { // Listen for all events from this socket

  })
})

// or globally

dropper.on('_all_', ...foo)
```

- **Custom events from current socket or globally**:

```javascript
...
socket.on('custom_event', ...foo) // Catch event just from the socket
...

dropper.on('custom_event', ...foo) // Catch event from all sockets
```

- **No named events from current socket or globally**:

If the client send a no named event (`client_side_dropper.send('no named')`), you can listen to it with the event name `message`

```javascript
...
socket.on('message', ...foo) // Catch no named event just from the socket
...

dropper.on('message', ...foo) // Catch no named event from all sockets
```

### Handling disconnections from server

You can handle disconnections on two scopes:

**From socket**:

Handling disconnects from sockets only works if the socket is manually disconnected. It will not work if the client loses connection. The callback receives the same two arguments as in the client API (bellow).

```javascript
dropper.on('connection', socket => {
  socket.on('close', (code, reason) => {
    //...foo
  })
})
```

**From global**

Handling global disconnects will listen to all clients that disconnect manually and also those that lose connection. The callback receives the same two arguments as in the client API (bellow) plus the disconnected socket as in the connection event.

```javascript
dropper.on('disconnection', (code, reason, socket) => {
  //...foo
})
```

### Reserved event senders

This is a list with the events you shouldn't play with:

- `connection` - The connection event sending is reserved for handling peer connection on server.
- `error` - The error event sending is reserved for handling connection issues.
- `disconnection` - The disconnection event sending is reserved for handling peer disconnection on server.

## Client

The client API connects to a server and it is a socket instance, so it has the same methods as the `socket` above.
> Note: For creating clients on deno you can import Dropper from the main module, please don't use the Browser bundle.


```javascript
const dropper = new Dropper(); // Connect the client on port 8080
dropper.on('pizza', function(data){
  console.log(data) // => I sent you a pizza!
  dropper.send('thanks', 'Thanks btw');
  dropper.close() // Closes the connection manually
});

dropper.on('close' => console.log('done'))
```
### Connecting custom hosts

By default the Dropper clients connect to `ws://localhost:8080` but you can change it by passing the host string as first param, you must specify if the connection is secure or not with the protocols `ws || http` for insecure connections or `wss || https` for secure connections.

```javascript
const dropper = new Dropper('ws://localhost:3000'); // Connect the client on port 3000

// OR

const options = {
  endpoint: '/myDropperServerReservedEndpoint'
}

const dropper = new Dropper(`wss://${window.location.host}`, options); // Connects the client on the current host with a secure connection
```

### Options (optional)

- `endpoint` - This is the endpoint that the server uses to handle wbsockets.
  - Default: `/dropper`

### API

**Methods**:

- `Dropper.close` - Closes the connection.

  The `close` method receives two **optional** arguments:

  - `code` - Connection close code number
  - `reason` - A reason message for the close event.

- `Dropper.broadcast` - Send the data to the server to be broadcasted to all peers except the emitter one.

  The `broadcast` method receive two arguments.

    - Argument1: `event` | `data` - This argument changes to data if the data argument is not provided, by default it is the event name.
     - `data` (optional) - This is the data to be sent.

- `Dropper.on` - Listen for the client events.

  The `on` method receives two arguments:

    - `event` - The event name
    - `callback` - Callback function to get the event data. 

- `Dropper.send` - Send the data to the server.

  The `send` method receive same arguments as the `broadcast` method.

  **Properties**:

  - `Dropper.uuid` - The id of the client.
  - `Dropper._socket` - This is the WebSocket instance itself.
  - `Dropper.uri` - The WebSockets connection uri.

## Sending data to server

- **Named event** 

This is pushing a custom event to the server

```javascript
dropper.send('pizza', 'this is a pizza')
```

```javascript
dropper.broadcast('pizza', 'this is a pizza')
```

This is broadcasting a custom event to the server

- **No named event** 

This is pushing a no named event to the server

```javascript
dropper.send('this is a pizza')
```

This is broadcasting a no named event to the server

```javascript
dropper.broadcast('this is a pizza')
```

### Listening for server events
- **Named event** 

This is listening a custom event from the server

```javascript
dropper.on('pizza', data => {
  ...foo
})
```

- **No named event** 

This is listening a no named event from the server

```javascript
dropper.on('message', data => {
  ...foo
})
```

## Handling disconnections

- **Handle own disconnection**

To handle the socket disconnection you can use the `close` event. It only listen when the sockets disconnects itself.

```javascript
dropper.on('close', (code, reason) => {
  ...foo
})
```

- **Handle other peers disconnection**

When a peer disconnects the server trigger the `disconnection` event that is useful for listening when other peers leave. It provides de uuid of the leaving socket.

```javascript
dropper.on('disconnection', uuid => {
  ...foo
})
```

## Reserved event senders

This is a list with the events you shouldn't play with:

- `_binary_` - The binary event sending is reserved for handling Uint8Array data.
- `error` - The error event sending is reserved for handling connection issues.
- `_all_` - The message event is the global event for listening to data.
- `_ping_` - The ping event is a websockets connection handler.
- `_pong_` - The pong event is a websockets connection handler.
- `_broadcast_` - The broadcast event is an internal event for transport data to all users but the current one.

## Event collision warning

All the Dropper internal events has as prefix and suffix `_`. For example this is an internal event: `_ping_`, This is for preventing event collisions.

## Building the web client

- Install rollup from [this module](https://deno.land/x/drollup)

- Perform the bundle:

```bash
rollup -c
```

#### The documentation is WIP right now

By now, you can find detailed code in the examples folder.

# 📝 Roadmap

- Channels support
- ✔️ Rename the `message` event to `_all_`
- ✔️ Broadcast support
- Auto reconnect
- ✔️ Improve documentation
- Website
- ✔️ Prevent using internal events
- ✔️ Handle forced client disconnection

# 👊 Support this project by donating on:
- [Paypal](https://paypal.me/DENYNCRAWFORD?locale.x=en_US).
- BTC address: 39ik7oyYvmiMeTXTscY3bb9rUFMHdjf5pd

# 📜 MIT License

Copyright (c) Crawford.

[Full license](/LICENSE.md)

