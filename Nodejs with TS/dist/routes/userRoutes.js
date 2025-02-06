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
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const router = express_1.default.Router();
``;
router.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () { (0, userController_1.createUser)(req, res); }));
router.post("/login", userController_1.login);
router.get("/:email", userController_1.getUserByEmail);
router.get("/GetAllUsers", userController_1.getAllUsers);
router.post("/getByUId", userController_1.getUserByUId);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map