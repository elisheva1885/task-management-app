import type { CreateTaskRequestDto } from "../dto/create-task.dto.js";
import type { Task } from "../entities/Task.entity.js";
import { TaskService } from "../services/task.service.js";
import { type Response, type Request } from "express";

const taskService = new TaskService()
export class TaskController {
    async addTask(req: Request, res: Response) {
        const data: CreateTaskRequestDto = req.body;
        if (!data.title || !data.description || !data.priority || !data.deadline) {
            return res.status(400).json({ message: "All details required" });
        }
        if (typeof data.title !== "string" || typeof data.description !== "string" || typeof data.priority !== "string" ||  data.deadline !== "string") {
            return res.status(400).json({ message: "Invalid input" });
        }
        const task = await taskService.addTask(data);
        res.status(201).json(task);
    }
}