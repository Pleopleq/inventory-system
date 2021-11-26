import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    define: {
      createdAt: "createdat",
      updatedAt: "updatedat",
    },
  }
);

sequelize.authenticate();
