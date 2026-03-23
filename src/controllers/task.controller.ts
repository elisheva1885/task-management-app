import { TaskService } from "../services/task.service.js"
import { type Response, type Request } from "express";
import type { AuthRequest } from "../types/auth.types.js";
import jwt from "jsonwebtoken";

const taskService = new TaskService();

export class TaskController {
    async getAllTasks(req: AuthRequest, res: Response) {
        const userId = (req.currentUser as jwt.JwtPayload)?.id;
        if (!userId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const tasks = await taskService.getAllTasks(userId);
        res.status(200).json(tasks);
    }
}