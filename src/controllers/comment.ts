import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { createResponse } from "../utils/response";
import Comment from "../models/Comment";
import Post from "../models/Post";
import User from "../models/User";

export const getAllComments = async (req:Request, res:Response) => {
    try {
        const comments = await Comment.findAll({ include: [Post, User] })
        const response = createResponse("success", "Comments retrieved successfully.", comments)
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to retrieve comment.", error)
        return res.status(500).json(response)
    }
}

export const getCommentById = async (req:Request, res:Response) => {
    try {
        const {id} = req.params 
        const comment = await Comment.findByPk(id, {include: [Post, User]})
        const response = createResponse("success", "Comment retrieved successfully.", comment)
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to retrieve comment.", error)
        return res.status(500).json(response)
    }
}

export const createComment = async (req:Request, res:Response) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        const {content, postId, authorId} = req.body
        const comment = await Comment.create({content, postId, authorId})
        const response = createResponse("success", "Comment created successfully.", comment)
        return res.status(201).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to create comment.", error)
        return res.status(500).json(response)
    }
}

export const updateComment = async (req:Request, res:Response) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        const {id} = req.params
        const {content, postId, authorId} = req.body
        await Comment.update({content, postId, authorId}, { where: {id} })
        const response = createResponse("error", "Comment updated successfully.")
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to update comment.", error)
        return res.status(500).json(response)
    }
}

export const deleteComment = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        await Comment.destroy({where: {id}})
        const response = createResponse("success", "Comment deleted successfully.")
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to deleted comment.", error)
        return res.status(500).json(response)
    }
}