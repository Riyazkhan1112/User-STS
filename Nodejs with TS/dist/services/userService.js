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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
const userModel_1 = require("../model/userModel");
const pgAdmin_1 = require("../Database/pgAdmin");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UserManager {
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                userData.password = yield bcryptjs_1.default.hash(userData.password, 10);
                var response = yield this.getUserByEmail(userData.email);
                if (response)
                    throw new Error;
                var userCreationData = yield userModel_1.User.create(userData);
                console.log(response);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var response = yield userModel_1.User.findOne({ where: { email } });
                return response;
            }
            catch (error) {
            }
        });
    }
    getUserbyUId(UId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [user] = yield pgAdmin_1.sequelize.query("SELECT * FROM users WHERE uId = :uId", {
                    replacements: { UId },
                });
                return user;
            }
            catch (error) {
            }
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // const [users] = await sequelize.query("SELECT * FROM users");
                var users = yield userModel_1.User.findAll();
                return users;
            }
            catch (error) {
                console.error("Error fetching users:", error);
                throw error;
            }
        });
    }
    ;
}
exports.UserManager = UserManager;
//# sourceMappingURL=userService.js.map