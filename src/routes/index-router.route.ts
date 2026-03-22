import express from 'express'
import { TaskController } from '../controllers/task.controller'
import { taskRouter } from './task.route'
export const indexRouter = express.Router()

indexRouter.use('/tasks',taskRouter )