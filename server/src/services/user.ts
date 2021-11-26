import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { logger } from "../constants/logger";
import { UserModel, User, UserModelLogin } from "../models/user";

export class UserService {
  private readonly _saltRounds = 12;
  private readonly _jwtSecret = "0.2dk221sazh";

  private static _user: any;
  static get user() {
    return UserService._user;
  }

  register({ username, password, email }: UserModel) {
    return bcrypt
      .hash(password, this._saltRounds)
      .then((hash) => {
        return User.create({ username, email, password: hash });
      })
      .catch((err) => {
        logger.log("error", "Error: ", err);
      });
  }

  login({ username, password }: UserModelLogin) {
    return User.findOne({ where: { username } })
      .then(async (user) => {
        if (!user) {
          throw new Error("Unable to log in");
        }

        const isPasswordMatch = await bcrypt.compare(
          password,
          user?.getDataValue("password")
        );

        if (!isPasswordMatch) {
          throw new Error("Unable to log in");
        }

        const user_id = user?.getDataValue("user_id");
        const username = user?.getDataValue("username");
        return { token: jwt.sign({ user_id, username }, this._jwtSecret) };
      })
      .catch((err) => {
        logger.log("error", "Error: ", err);
      });
  }

  verifyToken(token: string) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, this._jwtSecret, (err, decoded) => {
        if (err) {
          reject(false);
          return;
        }
        UserService._user = User.findByPk(decoded?.user_id);

        resolve(true);
        return;
      });
    }) as Promise<boolean>;
  }
}
