import { Request, Response } from "express";
import IUserInterface from "../interface/IuserService";

export default class UserController {
  constructor(private readonly userInterface: IUserInterface) { }

  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = await this.userInterface.createUser(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "User Already Exists", error });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body; // Fixed destructuring
      const user = await this.userInterface.login(email, password);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).json({ message: "Error logging in", error });
    }
  };

  getUserByEmail = async (req: Request, res: Response) => {
    try {
      const user = await this.userInterface.getUserByEmail(req.params.email);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving user", error });
    }
  };

  getUserByUId = async (req: Request, res: Response) => {
    try {
      const user = await this.userInterface.getUserbyUId(req.params.uId); // Fixed parameter case
      res.status(200).send(user);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving user", error });
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const users = await this.userInterface.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving users", error });
    }
  };
}



