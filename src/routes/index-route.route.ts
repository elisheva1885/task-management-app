import express from 'express'
import { taskRouter } from './task.route.js';
export const indexRouter = express.Router()

indexRouter.use("/tasks", taskRouter)
