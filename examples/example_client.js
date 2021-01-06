import Dropper from "../src/mod.ts";

const client = new Dropper("ws://localhost:8080"); // Connect

client.on("message", (data) => { // Catch all events
  console.log(data);
});

client.on("open", () => {
  console.log("Connected.");
  client.send("Hello, world!"); // Simple send
  client.send("crawford", {     // Custom event
    name: 'denyncrawford'
  })
});

client.on("crawford", data => { // Catch custom event
  console.log(data);
})

client.on("close", (code, reason) => { //Catch close
  console.log("Disconnected:", code, "|", reason);
});
