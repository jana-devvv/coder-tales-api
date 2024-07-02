import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'mysql',
    models: [__dirname + '/../models']
})

export default sequelize