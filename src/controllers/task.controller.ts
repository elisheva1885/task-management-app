import { TaskService } from "../services/task.service.js";
import { type Response } from "express";

const taskService = new TaskService()
export class TaskController {



    async addTask(req: Request, res: Response): Task {
            const data = req.body;
            const task = await taskService.addTask(data);
            res.status(201).json(task);
    }
}