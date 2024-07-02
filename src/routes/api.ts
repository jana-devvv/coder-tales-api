import { Router } from 'express'
import { login, register } from '../controllers/auth'
import { createPost, deletePost, getAllPosts, getPostById, updatePost } from '../controllers/post'
import { createComment, deleteComment, getAllComments, getCommentById, updateComment } from '../controllers/comment'
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from '../controllers/category'
import { categorySchema, commentSchema, loginSchema, postSchema, registerSchema } from '../middleware/validators'
import { auth } from '../middleware/auth'

const router = Router()

// Authentication Routes
router.post('/register', registerSchema, register) 
router.post('/login', loginSchema, login)

// Post Routes
router.get('/posts', getAllPosts) 
router.get('/post/:id', getPostById)
router.post('/post', auth, postSchema, createPost) 
router.put('/post/:id', auth, postSchema, updatePost) 
router.delete('/post/:id', auth, deletePost) 

// Category Routes
router.get('/categories', getAllCategories)
router.get('/category/:id', getCategoryById)
router.post('/category', auth, categorySchema, createCategory) 
router.put('/category/:id', auth, categorySchema, updateCategory) 
router.delete('/category/:id', auth, deleteCategory) 

// Comment Routes
router.get('/comments', getAllComments) 
router.get('/comment/:id', getCommentById) 
router.post('/comment', auth, commentSchema, createComment) 
router.put('/comment/:id', auth, commentSchema, updateComment) 
router.delete('/comment/:id', auth, deleteComment) 

export default router