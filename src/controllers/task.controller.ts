import { TaskService } from "../services/task.service.js"
import { type Response } from "express";
import type { AuthRequest } from "../types/auth.types.js";

const taskService = new TaskService();

export class TaskController {
     async deleteTask(req: AuthRequest, res: Response): Promise<Response>{
        const taskId = req.params.id as string;
         if (!req.currentUser) {            
            return res.status(401).json({ message: "Unauthorized" });
        }
        const userId = req.currentUser.id;
        await taskService.deleteTask(taskId, userId);
        return res.status(204).send();
    }
    async getAllTasks(req: AuthRequest, res: Response) : Promise<Response> {
        if (!req.currentUser) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const userId = req.currentUser.id;
        const tasks = await taskService.getAllUserTasks(userId);
        if(tasks.length === 0){
            return res.status(200).json({message: "you dont have any tasks yet"})
        }
        return res.status(200).json(tasks);
    }
}
