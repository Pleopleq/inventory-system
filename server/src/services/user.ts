import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import * as Bluebird from 'bluebird'
import { UserModel, User } from '../models/user'


export class UserService {
    private readonly _saltRounds = 12
    private readonly _jwtSecret = '0.2dk221sazh'

    static get userAttributes(){
        return ['id', 'email']
    }

    private static _user: UserService

    static get user() {
        return UserService._user
    }

    register({ username, password, email }: UserModel) {
        return bcrypt.hash(password, this._saltRounds)
            .then(hash => {
                return User.create({ username, email, password: hash})
            })
    }
}