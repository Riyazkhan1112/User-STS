"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(userInterface) {
        this.userInterface = userInterface;
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("hi");
                const user = yield this.userInterface.createUser(req.body);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ message: "User Already Exists", error });
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body; // Fixed destructuring
                const user = yield this.userInterface.login(email, password);
                res.status(200).send(user);
            }
            catch (error) {
                res.status(500).json({ message: "Error logging in", error });
            }
        });
        this.getUserByEmail = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userInterface.getUserByEmail(req.params.email);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ message: "Error retrieving user", error });
            }
        });
        this.getUserByUId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userInterface.getUserbyUId(req.params.uId); // Fixed parameter case
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ message: "Error retrieving user", error });
            }
        });
        this.getAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userInterface.getAllUsers();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(500).json({ message: "Error retrieving users", error });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=userController.js.map