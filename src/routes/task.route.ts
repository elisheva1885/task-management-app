import express, { type RequestHandler } from 'express'
import { TaskController } from '../controllers/task.controller.js';
import { authentication } from '../middlewares/jwt.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createTaskSchema } from '../schemas/task.schema.js';
import asyncHandler from '../middlewares/async-handler.middleware.js'
export const taskRouter = express.Router()
const taskController = new TaskController();

taskRouter.use(authentication)
taskRouter.post('/' ,validate(createTaskSchema), asyncHandler(taskController.addTask))
