import type { CreateTaskDto } from "../dto/create-task.dto.js";
import type { Task } from "../entities/Task.entity.js";
import { TaskService } from "../services/task.service.js";
import { type Response } from "express";

const taskService = new TaskService()
export class TaskController {



    async addTask(req: Request, res: Response) {
        const {title, description , priority, deadline} = req.body;
        const taskDto : CreateTaskDto ={
            title: title,
            description: description,
            priority: priority,
            deadline: deadline
        } 
        const task = await taskService.addTask(taskDto);
        res.status(201).json(task);
    }
}