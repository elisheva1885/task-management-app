import { TaskService } from "../services/task.service.js"


const taskService = new TaskService();

export class TaskController {
    async getAllTasks(req:Request, res:Response){
        const tasks = taskService.getAllTasks();
    }
}