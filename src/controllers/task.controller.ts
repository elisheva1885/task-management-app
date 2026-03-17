import { TaskService } from "../services/task.service.js"
import { type Request, type Response } from "express";

const taskService = new TaskService();

export class TaskController {
    async updateTask(req: Request, res: Response) {
        const data = req.body;
        const id = Number(req.params.id);
        const tasks = taskService.updateTask(data, id);
    }
}

