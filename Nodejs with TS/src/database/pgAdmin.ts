import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "User", // Database name
  "postgres", // Database username
  "root", // Database password
  {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
  }
);
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

sequelize.sync()

export default sequelize
