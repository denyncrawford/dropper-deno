import Dropper from '../../dist/clients/dropper.browser.js'
  const dropper = new Dropper()
  dropper.on("open", () => {
    console.log("Connected.");
    dropper.send("Hello, world!"); // Simple send
    dropper.send("crawford", {     // Custom event
      name: 'denyncrawford'
    })
  });
  dropper.on("crawford", data => { // Catch custom event
    console.log(data);
  })