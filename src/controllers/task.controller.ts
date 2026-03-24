import jwt from 'jsonwebtoken'
import type { CreateTaskRequestDto } from "../dto/create-task.dto.js";
import { TaskService } from "../services/task.service.js";
import { type Response, type Request } from "express";
import type { AuthRequest } from "../types/auth.types.js";

const taskService = new TaskService()
export class TaskController {
    async addTask(req: AuthRequest, res: Response) {
        const data: CreateTaskRequestDto = req.body;
        const userId = req.currentUser!.id;
        const task = await taskService.addTask(data, userId);
        res.status(201).json(task);
    }
}