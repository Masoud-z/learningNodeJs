"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
class Logger extends events_1.default {
    log(message) {
        this.emit("logging", { message });
    }
}
exports.default = Logger;
