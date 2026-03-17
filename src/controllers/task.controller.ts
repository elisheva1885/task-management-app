import { TaskService } from "../services/task.service.js";


const taskService = new TaskService()
export class TaskController {



    async addTask(req: Request, res: Response): Task {
            const data = req.body;
            const task = await taskService.addTask(data);
            res.status(201).json(task);
    }
}