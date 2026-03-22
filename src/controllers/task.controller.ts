import { TaskService } from "../services/task.service.js"
import { type Response , type Request} from "express";

const taskService = new TaskService();

export class TaskController {
    async getAllTasks(req:Request, res:Response){
            const tasks = taskService.getAllTasks();
            return tasks;
    }
}