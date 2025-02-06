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
exports.UserManager = void 0;
const user_1 = require("../model/user");
class UserManager {
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("start to store in the database");
                var response = yield user_1.User.create(userData);
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
                var response = yield user_1.User.findOne({ where: { email } });
                return response;
            }
            catch (error) {
            }
        });
    }
}
exports.UserManager = UserManager;
//# sourceMappingURL=user.js.map