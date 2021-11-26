import { Router } from "express";
import { logger } from "../../constants/logger";
import { UserService } from "../../services/user";

export const userRouter = Router();
const userService = new UserService();

userRouter.post("/register", async (req, res) => {
  try {
    const payload = req.body;
    const user = await userService.register(payload);
    if (!user) {
      res
        .status(404)
        .send({ error: "This username or email is already taken." });
    }

    res.status(200).json(user);
  } catch (error: any) {
    logger.error("Error: ", error);
    res.status(500).send({ error: error.message });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const payload = req.body;
    const user = await userService.login(payload);
    if (!user) {
      res.status(404).json({ error: "Unable to log in." });
    }

    res.status(200).json(user);
  } catch (error: any) {
    logger.error("Error: ", error);
    return res.status(500).send({ error: error.message });
  }
});
