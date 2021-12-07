import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cors from "cors";
import { userRouter } from './controllers/user/userRoutes'
import { tokenGuard } from "./middlewares/tokenGuard";
import { inventoryRouter } from './controllers/inventory/inventoryRoutes';

const app = express();

app.use(express.json());
app.use(cors());
// Unprotected Routes
app.use(userRouter)

// Protected Routes
app.use(tokenGuard())

app.use(inventoryRouter)

export default app
