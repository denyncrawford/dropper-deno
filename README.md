# Dropper

A simple WebSocket based event/data pusher that runs in your Deno app.

Dropper is a custom **Event-driven WebSocket library** for Deno, using the deno-std ws module as base.

Send and receive notifications, messages, updates and any data, all in real-time with custom events and methods served on your own, Dropper is Open Source, self-served and FREE forever!

## What can I do with Dropper?

Since Dropper is a WebSocket solution for delivering messages between servers and clients in real-time, our Side by Side APIs are designed to handle custom events sent by the application peers, you can work with the structured event handlers that allows to send and receive data in a woshhh.


## Importing

**Client:**

```ts
import Dropper from 'https://deno.land/x/dropper@1.0.0/src/mod.ts';
//or
import Dropper from 'https://x.nest.land/dropper@1.1.0/src/mod.ts'
```

**Server:**

```ts
import { Server } from 'https://deno.land/x/dropper@1.0.0/src/mod.ts';
//or
import { Server } from 'https://x.nest.land/dropper@1.1.0/src/mod.ts'
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

**The server has two methods**:

  - `on` - Listen for the server events.

    The `on` method receives two arguments:

      - `event` - The event name
      - `callback` - Callback function to get the new connected socket instance if the event is `connection` or the event data if the event is `any`. 
  
  - `send` - Send global data to all connected sockets
    
    The `send` method receive two arguments.

      - Argument1: `event` | `data` - This argument changes to data if the data argument is not provided, by default it is the event name.
      - `data` (optional) - This is the data to be sent.

### You can send data to clients in three ways:

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

## Reserved event senders

This is a list with the events you shouldn't play with:

- `connection` - The connection event sending is reserved for handling peer connection on server.
- `error` - The error event sending is reserved for handling connection issues.

## Client

The client API connects to a server and it is a socket instance, so it has the same methods as the `socket` above.

```javascript
const dropper = new Dropper(); // Connect the client on port 8080
dropper.on('pizza', function(data){
  console.log(data) // => I sent you a pizza!
  dropper.emit('thanks', 'Thanks btw');
});
```

**The client has four methods**:

- `close` - Closes the connection.

  The `close` method receives two **optional** arguments:

  - `code` - Connection close code number
  - `reason` - A reason message for the close event.

- `broadcast` - Send the data to the server to be broadcasted to all peers but this (Only works on server-side).

  The `broadcast` method receive two arguments.

    - Argument1: `event` | `data` - This argument changes to data if the data argument is not provided, by default it is the event name.
     - `data` (optional) - This is the data to be sent.

- `on` - Listen for the client events.

  The `on` method receives two arguments:

    - `event` - The event name
    - `callback` - Callback function to get the event data. 

- `send` - Send the data to the server.

  The `send` method receive same arguments as the `broadcast` method.

  ## Reserved event senders

This is a list with the events you shouldn't play with:

- `binary` - The binary event sending is reserved for handling Uint8Array data.
- `error` - The error event sending is reserved for handling connection issues.
- `message` - The message event is the global event for listening to data.
- `ping` - The ping event is a websockets connection handler.
- `pong` - The pong event is a websockets connection handler.

#### The documentation is WIP right now

By now, you can find detailed code in the examples folder.

# 📝 TO DO

- Channels support
- Improve documentation
- Website
- Prevent using internal events
- Handle forced client disconnection

# 👊 Support this project by donating on:
- [Paypal](https://paypal.me/DENYNCRAWFORD?locale.x=en_US).
- BTC address: 39ik7oyYvmiMeTXTscY3bb9rUFMHdjf5pd

# 📜 MIT License

Copyright (c) Crawford.

[Full license](/LICENSE.md)

