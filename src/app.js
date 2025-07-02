import express from "express";
import morgan from "morgan";
import connectDb from "./config/db.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import taskRoutes from './routes/taskRouter.js'

const app = express()
connectDb()
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/tasks', taskRoutes)

app.use(errorHandler)

export default app;