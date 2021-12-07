import Models from "../models"

interface InventoryModel {
    userId: string
    inventory_name:string
}

export class InventoryService {
    constructor() {
        this.models = Models();
    }
    private models;

    async createInventory({userId, inventory_name} : InventoryModel) {
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

