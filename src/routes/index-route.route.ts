import express from 'express'
import { TaskController } from '../controllers/task.controller.js';
import { taskRouter } from './task.route.js';
export const indexRouter = express.Router()

indexRouter.use("/tasks", taskRouter)
