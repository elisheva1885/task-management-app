
import { TaskService } from "../services/task.service.js"
import {type Response } from "express";
import type { AuthRequest } from "../types/auth.types.js";

const taskService = new TaskService();

export class TaskController {




    async deleteTsk(req: AuthRequest, res: Response) {
        const task_id = req.params.id;
        if (!task_id || typeof task_id !== 'string') {
            return res.status(400).json({ message: "no task choosen" });
        }
        const userId = req.currentUser!.id
        const tasks = taskService.deleteTask(task_id, userId);
    }
}
