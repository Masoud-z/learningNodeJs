import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.on("message", () => {
  console.log("message emitted");
});

emitter.emit("message");

//59:37
