import express from 'express'
import { TaskController } from '../controllers/task.controller.js';
import { authentication } from '../middlewares/jwt.middleware.js';
export const taskRouter = express.Router()
const taskController = new TaskController();


taskRouter.post('/',authentication , taskController.addTask)
