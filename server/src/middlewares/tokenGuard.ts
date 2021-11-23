import * as jwt from 'jsonwebtoken'
import { IncomingHttpHeaders } from 'http'
import { RequestHandler } from 'express'
import { UserService } from '../services/user'

const userService = new UserService()

function getTokenFromHeaders(headers: IncomingHttpHeaders) {
    const header = headers.authorization as string
    if(!header) { return header }

    return header.split(' ')[1]
}

export const tokenGuard : (() => RequestHandler) = (() => (req, res, next) => {
    const token = getTokenFromHeaders(req.headers) || req.query.token || req.body.token || ''
    const hasAcces = userService.verifyToken(token)

    hasAcces.then(access => {
        if(!access) {
            return res.status(403).send({ message: 'No access' })
        }
        next()
    })
})