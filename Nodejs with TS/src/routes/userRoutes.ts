import express, { Request, Response } from "express";
import { createUser, getAllUsers, getUserByEmail, getUserByUId, login } from "../controller/userController";
const router = express.Router();
``
router.post("/register", async (req: Request, res: Response) => { createUser(req, res) });

router.post("/login",login)
router.get("/:email", getUserByEmail);

router.get("/GetAllUsers", getAllUsers);

router.post("/getByUId", getUserByUId);


export default router;