
import { TaskService } from "../services/task.service.js"
import { type Request, type Response } from "express";

const taskService = new TaskService();

export class TaskController {




    async deleteTsk(req: Request, res: Response) {
        const task_id = Number(req.params.id)
        const tasks = taskService.deleteTask(task_id);
    }
}
