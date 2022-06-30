"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = exports.notice = exports.warn = void 0;
const colors_cli_1 = __importDefault(require("colors-cli"));
function warn(str) {
    console.log(`${colors_cli_1.default.blue("[Warn]")} ${colors_cli_1.default.yellow(str)}`);
}
exports.warn = warn;
function notice(str) {
    console.log(`${colors_cli_1.default.blue("[Notice]")} ${colors_cli_1.default.blue_bt(str)}`);
}
exports.notice = notice;
function error(str) {
    console.error(`${colors_cli_1.default.red_bbt("[Error]")} ${colors_cli_1.default.red_bt(str)}`);
}
exports.error = error;
exports.default = {
    warn,
    error,
    notice,
};
