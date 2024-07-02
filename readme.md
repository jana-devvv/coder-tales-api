# Coder Tales API

CoderTalesApi is an API designed for managing a personal blog, built using Express, Typescript, Sequelize, JWT and Express-Validator

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/jana-devvv/coder-tales-api.git
    ```
2. Navigate to the project directory:
    ```bash
    cd CoderTalesApi
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Copy the '.env.example' file to '.env' and adjust the configuration

## Usage
1. Compile Typescript to JavaScript:
    ```bash
    npm run build
    ```
2. Start the server:
    ```bash
    npm start
    ```
3. Access the API at 'http://localhost:3000'.

## Features
- **Authentication**: Using JWT for user Authentication.
- **Data Validation**: Input Validation with express-validator.
- **ORM**: Sequelize for database management.
- **Typescript**: Typescript support for saver and more structured development.
- **Blog management**: Endpoints for managing blog posts and user comments.

## API Endpoints

### Authentication
- `POST /api/auth/login`: Register User
- `POST /api/auth/login`: Login user

### Categories
- `GET /api/categories`: Get a list of all categories.
- `GET /api/category/:id`: Get category details by ID.
- `POST /api/category`: Create a new category.
- `PUT /api/category/:id`: Update a category by ID.
- `DELETE /api/category/:id`: Delete a category by ID.

### Posts
- `GET /api/posts`: Get a list of all posts.
- `GET /api/post/:id`: Get post details by ID.
- `POST /api/post`: Create a new post.
- `PUT /api/post/:id`: Update a post by ID.
- `DELETE /api/post/:id`: Delete a post by ID.

### Comments
- `GET /api/comments`: Get a list of all comments.
- `GET /api/comment/:id`: Get comment details by ID.
- `POST /api/comment`: Create a new comment.
- `PUT /api/comment/:id`: Update a comment by ID.
- `DELETE /api/comment/:id`: Delete a comment by ID.

### Examples 
#### Register User
```bash
curl -X POST http://localhost:3000/api/auth/register -d '{
    "name": "Jana",
    "username": "jana-devvv",
    "email": "example@gmail.com",
    "password": "example123",
}'
```

## Project Structure
```bash
    CoderTalesApi/
    ├─ node_modules/
    ├─ src/
    │  ├─ config/
    │  ├─ controllers/
    │  ├─ models/
    │  ├─ middleware/
    │  ├─ routes/
    │  ├─ utils/
    │  ├─ index.ts
    ├─ .env
    ├─ .env.example
    ├─ .gitignore
    ├─ package-lock.json
    ├─ package.json
    ├─ readme.md
    ├─ tsconfig.json

```

- **node_modules**: This directory contains all the npm packages installed for your project. These are the dependencies defined in your package.json file.
- **src**: This is the main source diretory where all the core application code resides.
- **src/config**: Contains configuration files for different environments (e.g., development, production)
- **src/controllers**: Contains controller files, which define the logic for handling incoming requests and returning responses.
- **src/middleware**: Includes middleware functions that process requests before they reach the controller.
- **src/models**: Contains Sequelize models, which define the structure of your database tables and the relationships between them using sequelize-typescript.
- **src/routes**: Holds route definitions, mapping URLs to controller actions.
- **src/utils**: Utility functions and helper methods that are used throughout your application.
- **src/index.ts**: The main entry point of your application.
- **.env**: Contains environmen-specific variables that are loaded at runtime.
- **.env.example**: An example environtment variables file that outlines the required variables and their format.
- **.gitignore**: Specifies which files and directories should be ignored by Git.
- **package-lock.json**: Records the exact versions of the dependencies installed.
- **package.json**: Contains metadata about your project, including dependencies, scripts, and other configuration details for npm.
- **README.md**: The main documentation file for your project.
- **tsconfig.json**: Typescript configuration file that defines compiler options and settings for your typescript project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.