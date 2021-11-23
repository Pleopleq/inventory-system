
import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/db'

export interface UserModel {
    user_id: number
    username: string
    password: string
    email: string
}

export interface UserModelLogin {
    username: string
    password: string
}

export const User = sequelize.define("users", {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})
