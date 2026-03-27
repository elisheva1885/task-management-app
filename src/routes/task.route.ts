import express from 'express'
import { TaskController } from '../controllers/task.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { updateTaskSchema } from '../schemas/task.schema.js';
import asyncHandler from '../middlewares/async-handler.middleware.js';
import { authentication } from '../middlewares/jwt.middleware.js';
import { createTaskSchema } from '../schemas/task.schema.js';
export const taskRouter = express.Router()
const taskController = new TaskController();

taskRouter.use(authentication)
taskRouter.put('/:id',validate(updateTaskSchema), asyncHandler(taskController.updateTask));
taskRouter.post('/' ,validate(createTaskSchema), asyncHandler(taskController.addTask))
taskRouter.get('/', asyncHandler(taskController.getAllTasks));

