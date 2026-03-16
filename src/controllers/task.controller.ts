import { TaskService } from "../services/task.service.js"


const taskService = new TaskService();

export class TaskController {
    async getAllTasks(req:Request, res:Response){
        try{
            const tasks = taskService.getAllTasks();
        }
        catch(error: Error){
            console.error(error);
        }
    }
}