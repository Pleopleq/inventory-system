import * as Sequelize from 'sequelize'
import { DataTypes } from 'sequelize'
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

export default function() {
    const Inventory = sequelize.define("inventory", {
        inventory_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        inventory_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true
    })

    const User = sequelize.define("users", {
        user_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
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

    User.hasMany(Inventory, {
        foreignKey: {
            name: 'userId',
            allowNull: false
        },
        as: 'inventories',
        keyType: Sequelize.DataTypes.UUID,
    })

    Inventory.belongsTo(User, {foreignKey: 'userId'})

    sequelize.sync({ alter: false }).then(() => {
        console.log("--- DB connected ---")
    }).catch(error => {
        console.log("--- Theres an error connecting to the database: ", error)
    })

    return { User, Inventory }
}