import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/db'

export default function() {
    const User = sequelize.define("users", {
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

    const Inventory = sequelize.define("inventory", {
        inventory_id: {
            type: Sequelize.DataTypes.UUIDV4,
            defaultValue: Sequelize.DataTypes.UUIDV4,
            primaryKey: true
        },
        inventory_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        timestamps: true
    })

    sequelize.sync({ alter: true })
}