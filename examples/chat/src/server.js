import { Server as Dropper } from "../../../src/mod.ts";
import { opine, serveStatic } from "https://deno.land/x/opine@1.0.2/mod.ts";
import {
  dirname,
  resolve,
  join
} from "https://deno.land/std@0.83.0/path/mod.ts";
const __dirname = dirname(import.meta.url);
const app = opine();
const dropper = new Dropper({
  serve: false
});

app.use("/dropper", (req) => dropper.handle(req));

app.use(serveStatic(join(__dirname, "../public")));

app.get("/*", function (req, res) {
  res.sendFile(join(__dirname, "../public/index.html"));
});

dropper.on("connection", (socket) => {
  console.log(`${socket.uuid} is online.`);
  socket.on("close", (code, reason) => {
    console.log(code, reason);
  });
});

dropper.on("_all_", (msg) => {
  console.log(msg);
});

app.listen(8080);

console.log("listening on port 8080", resolve("./public"));
