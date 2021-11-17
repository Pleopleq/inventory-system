import { Sequelize } from "sequelize";

const dbName = "inventory_sys"
const username = "postgres"
const password = "password"

export const sequelize = new Sequelize( dbName, username, password, {
  host: "localhost",
  dialect: "postgres",
  define: {
    "createdAt": "createdat",
    "updatedAt": "updatedat"
  }
});

sequelize.authenticate()
