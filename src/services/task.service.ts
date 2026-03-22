import { AppDataSource } from "../db/data-source.js";
import { Task } from "../entities/Task.entity.js";
import { AppError } from "../errors/app-errors.js";

const taskRepository = AppDataSource.getRepository(Task);


export class TaskService {
    async getAllTasks()  :  Promise<Task[]>{
        const tasks = taskRepository.find();
        if(!tasks){
            throw new AppError("no tasks found", 404)
        }
        return tasks;
    }
}