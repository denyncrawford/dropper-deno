# Dropper

Dropper is a custom **Event-driven WebSocket framework** for Deno, using the deno-std ws module as base.

Send and receive notifications, messages, updates and any data, all in real-time with custom events and methods served on your own, Dropper is Open Source, self-served and FREE forever!

## What can I do with Dropper?

Since Dropper is a WebSocket solution for delivering messages between servers and clients in real-time, it's Side by Side APIs are designed to handle custom events sent by the application peers, you can work with the structured event handlers that allows to send and receive classified data in a woshhh.


## Importing

**Client:**

```ts
import Dropper from 'https://deno.land/x/dropper@1.5.0/src/mod.ts';
//or
import Dropper from 'https://x.nest.land/dropper@1.5.0/src/mod.ts'
```

**Server:**

```ts
import { Server } from 'https://deno.land/x/dropper@1.5.0/src/mod.ts';
//or
import { Server } from 'https://x.nest.land/dropper@1.5.0/src/mod.ts'
```

## Usage

By default, it exports two instances of WebSocket. The API is very similar to the websockets API for browsers, but based on custom events.

## Server:

The server waits for socket connections using the global event `connection`. This event gets the new connected socket on its callback. This socket represents a client so the API is the same as in the client side.

```javascript
const dropper = new Server(); // Creates a default server on port 8080

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

### Methods

**The server has two methods**:

  - `on` - Listen for the server events.

    The `on` method receives two arguments:

      - `event` - The event name
      - `callback` - Callback function to get the new connected socket instance if the event is `connection` or the event data if the event is `any`. 
  
  - `send` - Send global data to all connected sockets
    
    The `send` method receive two arguments.

      - Argument1: `event` | `data` - This argument changes to data if the data argument is not provided, by default it is the event name.
      - `data` (optional) - This is the data to be sent.

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

The event name for listen to all events is `_all_`

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

```javascript
const dropper = new Dropper(); // Connect the client on port 8080
dropper.on('pizza', function(data){
  console.log(data) // => I sent you a pizza!
  dropper.send('thanks', 'Thanks btw');
  dropper.close() // Closes the connection manually
});

dropper.on('close' => console.log('done'))
```

### Methods

**The client has four methods**:

- `close` - Closes the connection.

  The `close` method receives two **optional** arguments:

  - `code` - Connection close code number
  - `reason` - A reason message for the close event.

- `broadcast` - Send the data to the server to be broadcasted to all peers but this (Meant to be used on server-side).

  The `broadcast` method receive two arguments.

    - Argument1: `event` | `data` - This argument changes to data if the data argument is not provided, by default it is the event name.
     - `data` (optional) - This is the data to be sent.

- `on` - Listen for the client events.

  The `on` method receives two arguments:

    - `event` - The event name
    - `callback` - Callback function to get the event data. 

- `send` - Send the data to the server.

  The `send` method receive same arguments as the `broadcast` method.

  ## Sending data to server

- **Named event** 

This is pushing a custom event to the server

```javascript
dropper.send('pizza', 'this is a pizza')
```

- **No named event** 

This is pushing a no named event to the server

```javascript
dropper.send('this is a pizza')
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

#### The documentation is WIP right now

By now, you can find detailed code in the examples folder.

# 📝 Roadmap

- Channels support
- ✔️ Rename the `message` event to `_all_`
- Auto reconnect
- Improve documentation
- Website
- ✔️ Prevent using internal events
- ✔️ Handle forced client disconnection

# 👊 Support this project by donating on:
- [Paypal](https://paypal.me/DENYNCRAWFORD?locale.x=en_US).
- BTC address: 39ik7oyYvmiMeTXTscY3bb9rUFMHdjf5pd

# 📜 MIT License

Copyright (c) Crawford.

[Full license](/LICENSE.md)

