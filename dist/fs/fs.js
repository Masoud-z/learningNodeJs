"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const file = fs_1.default.readdirSync("./");
fs_1.default.readdir("$", (err, file) => {
    if (err)
        console.log(err);
    console.log(file);
});
