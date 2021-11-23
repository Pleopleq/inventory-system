import { Router } from 'express'
import { logger } from '../../constants/logger'
import { UserService } from '../../services/user'

export const userRouter = Router()
const userService = new UserService()

userRouter.post('/register', (req, res) => {
    try {
        const payload = req.body
        const user = userService.register(payload)
        return user?.then(user => res.json(user))
    } catch (error) {
        logger.log('error', 'Error: ', error)
    }
})

userRouter.post('/login', (req, res) => {
    try {
        const payload = req.body
        const user = userService.login(payload)
        return user?.then(user => res.json(user))
    } catch (error) {
        logger.log('error', 'Error: ', error)
    }
})
