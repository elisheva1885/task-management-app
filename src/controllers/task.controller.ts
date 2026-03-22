import { TaskService } from "../services/task.service.js"
import { type Response, type Request } from "express";
import type { AuthRequest } from "../types/auth.types.js";
import  jwt  from "jsonwebtoken";

const taskService = new TaskService();

export class TaskController {
    async getAllTasks(req: AuthRequest, res: Response) {
        const user = req.currentUser as jwt.JwtPayload
        const tasks = await taskService.getAllTasks(user.id);
        res.status(200).json(tasks);
    }
}