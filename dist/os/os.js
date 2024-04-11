"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = __importDefault(require("os"));
const totalMemory = os_1.default.totalmem();
const freeMemory = os_1.default.freemem();
console.log(totalMemory);
console.log(freeMemory);
