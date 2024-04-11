import os from "os";

const totalMemory = os.totalmem();
const freeMemory = os.freemem();

console.log(totalMemory);
console.log(freeMemory);
