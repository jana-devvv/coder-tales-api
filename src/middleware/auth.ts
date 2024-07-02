import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken'

interface JwtRequest extends Request {
    user? : string | JwtPayload
}

export const auth = (req:JwtRequest, res:Response, next:NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1]

    if(!token){
        return res.status(401).json({ message: 'Access denied, no token provided' })
    }

    try {
        const user = jwt.verify(token, process.env.JWT_KEY)
        req.user = user
        next()
    } catch (error) {
        res.status(400).json({ message: 'Invalid Token' })
    }
}