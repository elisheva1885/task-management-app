import express from 'express'
import { TaskController } from '../controllers/task.controller.js';
const taskRouter = express.Router()
const taskController = new TaskController();

taskRouter.delete('/:id', taskController.deleteTsk)
