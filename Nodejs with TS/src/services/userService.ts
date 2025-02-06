
import { User } from "../model/userModel";
import { sequelize } from "../database/pgAdmin";
import bcrypt, { hashSync } from "bcryptjs";
import jwt from "jsonwebtoken";


export class UserManager {
  async createUser(userData: { name: string; email: string; password: string }) {
    try {
      userData.password = await bcrypt.hash(userData.password, 10);
      var user = "";
      var response = await this.getUserByEmail(userData.email);
      if (response) throw new Error;

      var userCreationData = await User.create(userData);

      console.log(response);

      return response

    } catch (error) {

      throw error;
    }
  }

  async login (email : string , password :string)
  {
    try {
      var response = await this.getUserByEmail(email);
      if(response == null) throw new Error ( "User Not Found") 

      var haspassword = await bcrypt.hash(password,10);

      if(haspassword == response.password)
      {
          // generate the Jwt Token ;

          const token = jwt.sign({ id: response.id, email: response.email }, process.env.JWT_SECRET!, { expiresIn: "1h" });
          return token
      }
      else{
        throw new Error("Invalid Password");
      
      }

    } catch (error) {
      throw new Error;
    }
  }
  async getUserByEmail(email: string) {

    try {
      var response = await User.findOne({ where: { email } });
      return response;
    } catch (error) {

    }
  }

  async getUserbyUId(UId: string) {
    try {

      const [user] = await sequelize.query("SELECT * FROM users WHERE uId = :uId", {
        replacements: { UId },
      });

      return user;
    } catch (error) {

    }
  }

  async getAllUsers() {
    try {
      // const [users] = await sequelize.query("SELECT * FROM users");

      var users = await User.findAll();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  };

}

