import { AppDataSource } from "../db/data-source.js";
import type { CreateTaskRequestDto } from "../dto/create-task.dto.js";
import { Task } from "../entities/Task.entity.js";
import { AppError } from "../errors/app-errors.js";

const taskRepository = AppDataSource.getRepository(Task);

export class TaskService {

    async addTask(data:CreateTaskRequestDto):Promise<Task> {
         const deadline = new Date(data.deadline);
        if(!deadline.getDate()){
            throw new AppError("Invalid date format" , 400)
        }
        const task = taskRepository.create({...data, deadline})
        await taskRepository.save(task);
        return task;
    }
}