import { TaskService } from "../services/task.service.js"
import { type Response } from "express";
import type { AuthRequest } from "../types/auth.types.js";
import type { UpdataTaskRequestDto } from "../dto/task.dto.js";

const taskService = new TaskService();

export class TaskController {
    async updateTask(req: AuthRequest, res: Response) {
        const data: UpdataTaskRequestDto = req.body;
        const id = req.params.id as string;
        if (!id ) {
            return res.status(400).json({  message: "Task ID is required"  });
        }
        const userId = req.currentUser!.id
        const task = await taskService.updateTask(data, id, userId);
        return res.status(200).json(task);
    }

    async getAllTasks(req: AuthRequest, res: Response) : Promise<Response> {
        if (!req.currentUser) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const userId = req.currentUser.id;
        const tasks = await taskService.getAllTasks(userId);
        if(tasks.length === 0){
            return res.status(200).json({message: "you dont have any tasks yet"})
        }
        return res.status(200).json(tasks);
    }
}
