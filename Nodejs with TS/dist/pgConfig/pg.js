"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize("User", // Database name
"postgres", // Database username
"root", // Database password
{
    host: "localhost",
    dialect: "postgres",
    port: 5433,
});
try {
    exports.sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
exports.sequelize.sync();
exports.default = exports.sequelize;
//# sourceMappingURL=pg.js.map