import express from 'express'
import { TaskController } from '../controllers/task.controller.js';
import asyncHandler from '../middlewares/async-handler.middleware.js';
import { authentication } from '../middlewares/jwt.middleware.js';
export const taskRouter = express.Router()
const taskController = new TaskController();
taskRouter.use(authentication)
taskRouter.delete('/:id',asyncHandler(taskController.deleteTsk));
