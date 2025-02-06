import { Request, Response } from "express";
import { UserManager } from "../services/userService";
import bcrypt from "bcryptjs";
import { User } from "../model/userModel";


const userManager = new UserManager();

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userManager.createUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "User Already Exists", error: error });
  }
};


export const login = async (req: Request, res: Response) => {
  try {

    const [email , password] = req.body;
    const user = await userManager.login( email,password);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "User Already Exists", error: error });
  }
};


export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const user = await userManager.getUserByEmail(req.params.email);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user" });
  }
};

export const getUserByUId = async (req: Request, res: Response) => {
  try {
    const user = await userManager.getUserbyUId(req.params.UId)
    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({ message: "Error retrieving user" });
  }

}
export const getAllUsers = async (req: Request, res: Response) => {
  try {


    const user = await userManager.getAllUsers()
    res.status(200).json(user);

  } catch (error) {

    res.status(500).json({ message: "Error retrieving user" });


  }


}