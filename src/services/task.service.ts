import { AppDataSource } from "../db/data-source.js";
import { Task } from "../entities/Task.entity.js";
import { AppError } from "../errors/app-errors.js";

const taskRepository = AppDataSource.getRepository(Task);


export class TaskService {
    async getAllTasks(userId: string): Promise<Task[]> {
        const tasks = await taskRepository.find(
            { where: { userId } }
        );
        
        if (tasks.length === 0) {
            throw new AppError("no tasks found", 404)
        }
        return tasks;
    }
}