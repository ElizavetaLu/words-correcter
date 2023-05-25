"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const body_parser_1 = require("body-parser");
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
mongoose_1.default.connect('mongodb://localhost:27017/words-correcter');
app.use((0, morgan_1.default)('combined'));
app.use((0, body_parser_1.json)());
app.use((0, cors_1.default)());
(0, router_1.default)(app);
const port = process.env.PORT || 7070;
const server = http_1.default.createServer(app);
server.listen(port);
console.log('Server listening on:', port);