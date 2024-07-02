import express from 'express';
import cors from 'cors';
import routes from './routes/api';
import sequelize from './config/database';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/api', routes)

const startServer = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ force: true })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

startServer()