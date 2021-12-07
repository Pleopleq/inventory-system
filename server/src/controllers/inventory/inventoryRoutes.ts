import { Router } from 'express'
import { logger } from '../../constants/logger'

export const inventoryRouter = Router();

inventoryRouter.get("/inventory",(req, res) => {
    try {
        res.status(200).send("<h1>hey</h1>")
    } catch (error: any) {
        logger.error("Error: ", error)
        res.status(500).send({ error: error.message })
    }
})

inventoryRouter.post("/inventory", (req, res) => {
    try {
        res.status(200).send("<h1>hey</h1>")
    } catch (error: any) {
        logger.error("Error: ", error)
        res.status(500).send({ error: error.message })
    }
})