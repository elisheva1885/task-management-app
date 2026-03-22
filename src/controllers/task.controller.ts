import jwt from 'jsonwebtoken'
import type { CreateTaskRequestDto } from "../dto/create-task.dto.js";
import { TaskService } from "../services/task.service.js";
import { type Response, type Request } from "express";
import type { AuthRequest } from "../types/auth.types.js";

const taskService = new TaskService()
export class TaskController {
    async addTask(req: AuthRequest, res: Response) {
        const data: CreateTaskRequestDto = req.body;
        const userId = (req.currentUser as jwt.JwtPayload).id;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        if (!data.title || !data.description || !data.priority || !data.deadline) {
            return res.status(400).json({ message: "All details required" });
        }
        if (typeof data.title !== "string" || typeof data.description !== "string" || typeof data.priority !== "string" || typeof data.deadline !== "string") {
            return res.status(400).json({ message: "Invalid input" });
        }
        const task = await taskService.addTask(data, userId);
        res.status(201).json(task);
    }
}