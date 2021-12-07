import Models from "../models"

interface InventoryModelCreate {
    userId: string
    inventory_name:string
}

export class InventoryService {
    constructor() {
        this.models = Models();
    }
    private models;

    async getInventories(userId: string) {
        try {
            const {count, rows} = await this.models.Inventory.findAndCountAll({ where : {userId: userId}  })
            return {count, rows}
        } catch (error) {
            return error
        }
    }

    async createInventory({userId, inventory_name} : InventoryModelCreate) {
        try {
            const inventory = await this.models.Inventory.create({
                userId,
                inventory_name
            })
            return inventory
        } catch (error) {
            return error
        }
    }
}

