import { TaskService } from "../services/task.service.js"
import { type Response } from "express";
import type { AuthRequest } from "../types/auth.types.js";
import type { UpdataTaskRequestDto } from "../dto/task.dto.js";

const taskService = new TaskService();

export class TaskController {
    async updateTask(req: AuthRequest, res: Response) {
        const data: UpdataTaskRequestDto = req.body;
        const id = req.params.id;
        if (!id || typeof id !== 'string') {
            return res.status(400).json({ message: "no task choosen" });
        }
        const userId = req.currentUser!.id
        const task = await taskService.updateTask(data, id, userId);
        return res.status(200).json(task);
    }
}

