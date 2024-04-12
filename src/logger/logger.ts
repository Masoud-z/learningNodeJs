import EventEmitter from "events";

class Logger extends EventEmitter {
  log(message: string) {
    this.emit("logging", { message });
  }
}

export default Logger;
