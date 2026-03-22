import express, { type RequestHandler } from 'express'
import { TaskController } from '../controllers/task.controller.js';
import { authentication } from '../middlewares/jwt.middleware.js';
export const taskRouter = express.Router()
const taskController = new TaskController();

taskRouter.use(authentication as RequestHandler)
taskRouter.post('/' , taskController.addTask as RequestHandler)
