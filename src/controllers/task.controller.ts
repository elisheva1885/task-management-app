import type { CreateTaskRequestDto } from "../dto/create-task.dto.js";
import { TaskService } from "../services/task.service.js";
import { type Response } from "express";
import type { AuthRequest } from "../types/auth.types.js";
import { HttpStatus } from '../constants/http-status.js';

const taskService = new TaskService()
export class TaskController {
     async deleteTask(req: AuthRequest, res: Response): Promise<Response>{
        const taskId = req.params.id as string;
         if (!req.currentUser) {            
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        }
        const userId = req.currentUser.id;
        await taskService.deleteTask(taskId, userId);
        return res.status(HttpStatus.NO_CONTENT).send();
    }
    async addTask(req: AuthRequest, res: Response): Promise<Response> {
        const data: CreateTaskRequestDto = req.body;
        if (!req.currentUser) {            
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        }
        const userId = req.currentUser.id;
        const task = await taskService.addTask(data, userId);
        return res.status(HttpStatus.CREATED).json(task);
    }
    async getAllTasks(req: AuthRequest, res: Response) : Promise<Response> {
        if (!req.currentUser) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: "Unauthorized" });
        }
        const userId = req.currentUser.id;
        const tasks = await taskService.getAllUserTasks(userId);
        if(tasks.length === 0){
            return res.status(HttpStatus.OK).json({message: "you dont have any tasks yet"})
        }
        return res.status(HttpStatus.OK).json(tasks);
    }
}
