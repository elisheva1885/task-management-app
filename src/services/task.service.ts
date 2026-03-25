import { HttpStatus } from "../constants/http-status.js";
import { AppDataSource } from "../db/data-source.js";
import type { CreateTaskRequestDto } from "../dto/create-task.dto.js";
import { Task } from "../entities/Task.entity.js";
import { AppError } from "../errors/app-errors.js";

const taskRepository = AppDataSource.getRepository(Task);

export class TaskService {
    async addTask(data:CreateTaskRequestDto, userId: string):Promise<Task> {
        console.log("in here ");
         const deadline = new Date(data.deadline);
         if(isNaN(deadline.getTime())){
            throw new AppError("invalid date",HttpStatus.BAD_REQUEST)
         }
        const task = taskRepository.create({...data, deadline, userId})
        await taskRepository.save(task);
        return task;
    }
}