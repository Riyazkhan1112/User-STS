"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const inversify_1 = require("inversify");
const userService_1 = require("./services/userService");
const userController_1 = __importDefault(require("./controller/userController"));
const app = (0, express_1.default)();
const port = 8081;
app.use(express_1.default.json());
// Setting up Inversify Container
const container = new inversify_1.Container();
// container.bind<IUserInterface>("IUserInterface").to(userService);
// const conversationService = container.get<IUserInterface>("IUserInterface");
// const conversationController = new UserController(conversationService);
// const userRoute = new UserRoutes(conversationController);
const userRoutes = new userRoutes_1.default(new userController_1.default(new userService_1.userService()));
app.use("/api/users", userRoutes.getRouter());
app.get("/", (req, res) => {
    res.send("Hello From Server");
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map