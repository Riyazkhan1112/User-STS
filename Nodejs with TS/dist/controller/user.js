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
exports.getUserByEmail = exports.createUser = void 0;
const user_1 = require("../services/user");
const userManager = new user_1.UserManager();
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userManager.createUser(req.body);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
});
exports.createUser = createUser;
const getUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userManager.getUserByEmail(req.params.email);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving user" });
    }
});
exports.getUserByEmail = getUserByEmail;
//# sourceMappingURL=user.js.map