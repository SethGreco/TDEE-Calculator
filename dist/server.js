"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tdee_1 = require("./routes/tdee");
const cors_1 = __importDefault(require("cors"));
const port = process.env.PORT || 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(tdee_1.router);
app.use(express_1.default.static(__dirname + '../dist'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.listen(port);
console.log(`Application running on port ${port}`);
