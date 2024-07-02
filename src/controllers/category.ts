import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { createResponse } from "../utils/response";
import Category from "../models/Category";

export const getAllCategories = async (req:Request, res:Response) => {
    try {
        const categories = await Category.findAll()
        const response = createResponse("success", "Categories retrieved successfully.", categories)
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to retrieve categories.", error)
        return res.status(500).json(response)
    }
}

export const getCategoryById = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        const category = await Category.findByPk(id)
        const response = createResponse("success", "Category retrieved successfully.", category)
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to retrieve category.", error)
        return res.status(500).json(response)
    }
}

export const createCategory = async (req:Request, res:Response) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }

        const {name, description} = req.body
        const category = await Category.create({name, description})
        const response = createResponse("success", "Category created successfully.", category)
        return res.status(201).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to create category.", error)
        return res.status(500).json(response)
    }
}

export const updateCategory = async (req:Request, res:Response) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() })
        }
        
        const {id} = req.params
        const {name, description} = req.body
        const category = await Category.update({name, description}, { where: {id} })
        const response = createResponse("success", "Category updated successfully.")
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to update category.", error)
        return res.status(500).json(response)
    }
}

export const deleteCategory = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
        await Category.destroy({ where: {id} })
        const response = createResponse("success", "Category deleted successfully.")
        return res.status(200).json(response)
    } catch (error) {
        const response = createResponse("error", "Failed to delete category.", error)
        return res.status(500).json(response)
    }
}