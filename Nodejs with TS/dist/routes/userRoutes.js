"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRoutes {
    constructor(usrController) {
        this.router = (0, express_1.Router)();
        this.initializeRoutes();
        this.userController = usrController;
    }
    initializeRoutes() {
        this.router.post("/register", (req, res) => this.userController.createUser(req, res));
        this.router.post("/login", (req, res) => this.userController.login(req, res));
        // this.router.get("/:email", this.userController);
        // this.router.get("/GetAllUsers", getAllUsers);
        // this.router.post("/getByUId", getUserByUId);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = UserRoutes;
//# sourceMappingURL=userRoutes.js.map