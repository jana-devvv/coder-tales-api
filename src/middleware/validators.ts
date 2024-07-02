import { checkSchema } from "express-validator";
import { title } from "process";

export const registerSchema = checkSchema({
    name: {
        in: ['body'],
        notEmpty: {
            errorMessage: "Name is required"
        }
    },
    username: {
        in: ['body'],
        notEmpty: {
            errorMessage: "Username is required"
        }
    },
    email: {
        in: ['body'],
        notEmpty: {
            errorMessage: "Email is required"
        },
        isEmail: {
            errorMessage: "Invalid email address"
        }
    },
    password: {
        in: ['body'],
        notEmpty: {
            errorMessage: "Password is required"
        },
        isLength: {
            options: { min: 6 },
            errorMessage: "Password must be at least 6 characters long"
        }
    }
})

export const loginSchema = checkSchema({
    email: {
        in: ['body'],
        notEmpty: {
            errorMessage: "Credentials is required"
        },
        isEmail: {
            errorMessage: "Invalid email address"
        }
    },
    password: {
        in: ['body'],
        notEmpty: {
            errorMessage: "Password is required"
        }
    }
})

export const postSchema = checkSchema({
    title: {
        notEmpty: {
            errorMessage: "Title is required"
        }
    },
    content: {
        notEmpty: {
            errorMessage: "Content is required"
        }
    },
    categoryId: {
        notEmpty: {
            errorMessage: "Category is required"
        }
    },
    authorId: {
        notEmpty: {
            errorMessage: "Author is required"
        }
    }
})

export const categorySchema = checkSchema({
    name: {
        notEmpty: {
            errorMessage: "Name is required"
        }
    },
    description: {
        notEmpty: {
            errorMessage: "Description is required"
        }
    }
})

export const commentSchema = checkSchema({
    content: {
        notEmpty: {
            errorMessage: "Content is required"
        }
    },
    postId: {
        notEmpty: {
            errorMessage: "Post is required"
        }
    },
    authorId: {
        notEmpty: {
            errorMessage: "Author is required"
        }
    }
})