import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { createResponse } from "../utils/response";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from "../models/User";

export const register = async (req:Request, res:Response) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        const {name, username, email, password} = req.body
        const user = await User.create({name, username, email, password})
        const response = createResponse("success", "Registration successful.", user)
        return res.status(201).json(response)
    } catch (error) {
        const response = createResponse("error", "Registration failed.", error)
        return res.status(500).json(response)
    }
}

export const login = async (req:Request, res:Response) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        const {email, password} = req.body
        const user = await User.findOne({ where: { email } })

        if(!user) {
            const response = createResponse("error", "Invalid credentials.")
            return res.status(404).json(response)
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if(!isPasswordValid) {
            const response = createResponse("error", "Invalid credentials.")
            return res.status(401).json(response)
        }

        const token = jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email,
        }, process.env.JWT_KEY, {
            expiresIn: process.env.JWT_EXP
        })

        const response = createResponse("success", "Login successful.", token)
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Login failed.")
        return res.status(500).json(response)
    }
}