import express from "express";
import cors from "cors";
import { userRouter } from './routes/user/userRoutes'
import { sequelize } from "./instances/db";

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter)

//Routes


export default app

