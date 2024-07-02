import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { createResponse } from "../utils/response";
import Post from "../models/Post";
import User from "../models/User";
import Category from "../models/Category";
import Comment from "../models/Comment";

export const getAllPosts = async (req:Request, res:Response) => {
    try {
        const posts = await Post.findAll({ include: [User, Category] })
        const response = createResponse("success", "Posts retrieved successfully.", posts)
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to retrieve posts.", error)
        return res.status(500).json(response)
    }
}

export const getPostById = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        const post = await Post.findByPk(id, {include: [User, Category, Comment]})
        const response = createResponse("success", "Post retrieved successfully.", post)
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to retrieve post.", error)
        return res.status(500).json(response)
    }
}

export const createPost = async (req:Request, res:Response) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        const {title, content, categoryId, authorId} = req.body
        const post = await Post.create({title, content, categoryId, authorId})
        const response = createResponse("success", "Post created successfully.", post)
        return res.status(201).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to create post.", error)
        return res.status(500).json(response)
    }
}

export const updatePost = async (req:Request, res:Response) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        const {id} = req.params
        const {title, content, categoryId, authorId} = req.body
        await Post.update({title, content, categoryId, authorId}, { where: {id} })
        const response = createResponse("success", "Post updated successfully.")
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to update post.", error)
        return res.status(500).json(response)
    }
}

export const deletePost = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        await Post.destroy({ where: {id} })
        const response = createResponse("success", "Post deleted successfully.")
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to delete post.", error)
        return res.status(500).json(response)
    }
}