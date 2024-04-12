import Logger from "../logger/logger";

const logger = new Logger();

logger.on("logging", ({ message }: { message: string }) => {
  console.log(message);
});

logger.log("Hello from logger");
