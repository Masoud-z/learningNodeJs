"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Hello from node!");
        res.end();
    }
    if (req.url === "/api/ids") {
        res.write(JSON.stringify([1, 2, 3, 4]));
        res.end();
    }
});
server.on("connection", (socket) => {
    console.log("new connection");
});
server.listen("3000");
console.log("listening to port 3000");
