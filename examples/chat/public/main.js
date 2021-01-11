import Dropper from 'https://raw.githack.com/denyncrawford/dropper-deno/main/dist/clients/dropper.browser.js'

const dropper = new Dropper()

dropper.on("open", () => {
  console.log("Connected.");
  dropper.send("Hello, world!"); // Simple send
  dropper.send("crawford", { // Custom event
    name: 'denyncrawford'
  })
});

dropper.on('_all_', ev => {
  console.log(ev);
})

dropper.on('handshake', msg => {
  console.log(msg);
  dropper.send('thanks', "From client");
})

dropper.on("crawford", data => { // Catch custom event
  console.log(data);
})