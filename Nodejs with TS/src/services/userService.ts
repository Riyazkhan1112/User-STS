
import { User } from "../model/userModel";
import { sequelize } from "../database/pgAdmin";
import bcrypt from "bcryptjs"

export class UserManager {
  async createUser(userData: { name: string; email: string; password: string }) {
    try {
      userData.password = await bcrypt.hash(userData.password, 10);

      var response = await this.getUserByEmail(userData.email);
      if (response) throw new Error;

      var userCreationData = await User.create(userData);

      console.log(response);

      return response

    } catch (error) {

      throw error;
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

