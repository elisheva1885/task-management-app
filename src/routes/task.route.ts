import express from 'express'
import { TaskController } from '../controllers/task.controller.js';
import { authentication } from '../middlewares/jwt.middleware.js';
import asyncHandler from '../middlewares/async-handler.middleware.js'
import { validateUuid } from '../middlewares/validate-uuid.middleware.js';
export const taskRouter = express.Router()
const taskController = new TaskController();

taskRouter.use(authentication)
taskRouter.get('/', asyncHandler(taskController.getAllTasks));
taskRouter.delete('/:id',validateUuid(),asyncHandler(taskController.deleteTsk));


