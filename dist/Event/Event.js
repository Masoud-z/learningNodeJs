"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const emitter = new events_1.default();
emitter.on("message", () => {
    console.log("message emitted");
});
emitter.emit("message");
//59:37
