import { Server } from "../src/mod.ts";

const dropper = new Server(); // Creates a default server on por 8080

dropper.on("connection", (client) => {

  console.log("Client connected:", client.uuid);

  client.on("message", (data) => { // Listening all events
    console.log("All event data from peer:", data);
  });

  client.on("crawford", data => { // Listening custom event
    console.log(data);
    client.broadcast("crawford", "broadcast") // Broadcast to all clients but current.
    client.send("crawford", "individual") // Send only to current socket. 
    dropper.send("crawford", "global") // Send global event to all connections.
  })

  client.on("close", (code, reason) => {
    console.log("Client disconnected:", client.uuid);
    console.log("Code:", code, "Reason:", reason);
  });
  
  /*
    Return false to explicitly deny the connection.
    Returning true OR not setting return (undefined) allows the connection.
  */
});

dropper.on('crawford', data => { // Listen for global events
  console.log(`Global event listener: ${data}`);
})

dropper.send("crawford", "global outside")

// Send global event from outside to all connections
// This will not work because no sockets are connected while emitting this event, but you can use it from outside.
