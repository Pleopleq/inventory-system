
import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/db'

export interface UserModel {
    user_id: string
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
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
},{
    timestamps:true,
})

sequelize.sync({ alter: true })