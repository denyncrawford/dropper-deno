# Dropper

A simple WebSocket based event/data pusher that runs in your Deno app.

Dropper is a custom **Event-driven WebSocket library** for Deno, using the deno-std ws module as base.

Send and recive notifications, messages, updates and any data, all in real-time with custom events and methods served on your own, Dropper is Open Source, self-served and FREE forever!

## What can I do with Dropper?

Since Dropper is a WebSocket solution for delivering messages between servers and clients in real-time, our Side by Side APIs are designed to handle custom events sent by the aplication peers, you can work with the structured event hadlelers that allows to send and receive data in a woshhh.


## Importing

**Client:**

```ts
import Dropper from "https://deno.land/x/dropper@1.0.0/mod.ts";
```

**Server:**

```ts
import { Server } from "https://deno.land/x/dropper@1.0.0/mod.ts";
```

## Usage

By default, it exports two instances of WebSocket. The API is very similar to the websockets API for browsers, but based on custom events.

### Server:

```javascript
const dropper = new Server(); // Creates a default server on port 8080
```

### Client

```javascript
const dropper = new Dropper(); // Connect the client on port 8080
```

#### The documentation is WIP right now

By now, you can find detailed code in the examples folder.

# 📝 TO DO

- Channels support
- Improve documentation
- Website
- Prevent usin internal events
- Handle forced client disconnection

# 👊 Support this project by donating on:
- [Paypal](https://paypal.me/DENYNCRAWFORD?locale.x=en_US).
- BTC address: 39ik7oyYvmiMeTXTscY3bb9rUFMHdjf5pd

# 📜 MIT License

Copyright (c) Crawford.

[Full license](/LICENSE.md)

