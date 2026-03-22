import express from 'express'
import { TaskController } from '../controllers/task.controller.js';
export const taskRouter = express.Router()
const taskController = new TaskController();


taskRouter.post('/', taskController.addTask)
