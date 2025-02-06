"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const port = 8081;
app.use(express_1.default.json());
app.use("/api/users", userRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Hello From Server");
});
app.listen(port, () => {
    console.log(`server is running  http://localhost:8081`);
});
//# sourceMappingURL=app.js.map