import express, { Request, Response, Router } from "express";
import userController from "../controller/userController";

export default class UserRoutes {
    private readonly router: Router;
    private readonly userController: userController;

    constructor(usrController: userController) {
        this.router = Router();
        this.initializeRoutes();
        this.userController = usrController
    }

    initializeRoutes() {
        this.router.post("/register", (req: Request, res: Response) => this.userController.createUser(req, res));
        this.router.post("/login", (req: Request, res: Response) => this.userController.login(req,res));
        // this.router.get("/:email", this.userController);
        // this.router.get("/GetAllUsers", getAllUsers);
        // this.router.post("/getByUId", getUserByUId);
    }

    public getRouter(): Router {
        return this.router;
    }
}

