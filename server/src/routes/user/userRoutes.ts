import { Router } from 'express'
import { UserService } from '../../services/user'

export const userRouter = Router()
const userService = new UserService()

userRouter.post('/register', (req, res) => {
    try {
        const payload = req.body
        const user = userService.register(payload)
        user?.then(user => res.json(user))
    } catch (error) {
        console.log(error)
    }
})

userRouter.post('/login', (req, res) => {
    try {
        const payload = req.body
        const user = userService.login(payload)
        
        user?.then(user => res.json(userService.verifyToken(user.token)))
    } catch (error) {
        console.log(error)
    }
})
