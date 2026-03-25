
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
         if (!req.currentUser) {            
            return res.status(401).json({ message: "Unauthorized" });
        }
        const userId = req.currentUser.id;
        const task =await taskService.deleteTask(task_id, userId);
        res.status(200).json({message:`task ${task.title} deleted`})
    }
}
