import Dropper from 'https://raw.githubusercontent.com/denyncrawford/dropper-deno/main/dist/clients/dropper.browser.js'

const dropper = new Dropper()

dropper.on("open", () => {
  console.log("Connected.");
  dropper.send("Hello, world!"); // Simple send
  dropper.send("crawford", { // Custom event
    name: 'denyncrawford'
  })
});

dropper.on('handshake', () => {
  dropper.send('thanks', "From client");
})

dropper.on("crawford", data => { // Catch custom event
  console.log(data);
})