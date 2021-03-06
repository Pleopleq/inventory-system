import { Router } from 'express'
import { logger } from '../../constants/logger'
import { InventoryService } from '../../services/inventory';

export const inventoryRouter = Router();
const inventoryService = new InventoryService()

inventoryRouter.get("/inventory", async (req, res) => {
    try {
        const payload = req.body
        const inventories = await inventoryService.getInventories(payload.userId)
        
        res.status(200).json(inventories)
    } catch (error: any) {
        logger.error("Error: ", error)
        res.status(500).send({ error: error.message })
    }
})

inventoryRouter.post("/inventory", async (req, res) => {
    try {
        const payload = req.body
        const newInventory = await inventoryService.createInventory(payload)
        res.status(200).json(newInventory)
    } catch (error: any) {
        logger.error("Error: ", error)
        res.status(500).send({ error: error.message })
    }
})